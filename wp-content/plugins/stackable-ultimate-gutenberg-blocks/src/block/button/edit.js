import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	InspectorControls, BlockControls, BlockAlignmentToolbar, URLInput,
} from '@wordpress/editor'
import {
	Dashicon, IconButton, PanelBody,
} from '@wordpress/components'
import { Component, Fragment } from '@wordpress/element'
import { applyFilters } from '@wordpress/hooks'
import {
	ButtonEdit, PanelButtonSettings, ProControl,
} from '@stackable/components'
import { range } from '@stackable/util'
import { isPro, showProNotice } from 'stackable'

class edit extends Component {
	constructor() {
		super( ...arguments )
		this.state = {
			selectedButton: 0,
		}
	}

	// Deselect button when deselecting the block
	componentDidUpdate( prevProps ) {
		if ( this.props.isSelected && ! prevProps.isSelected ) {
			this.setState( {
				selectedButton: 0,
			} )
		}
	}

	render() {
		const {
			isSelected, className, setAttributes, attributes,
		} = this.props

		const {
			color, textColor, size, align, cornerButtonRadius, design, icon, buttons,
		} = attributes

		const mainClasses = classnames( [
			className,
			'ugb-button-wrapper',
		], {
			[ `ugb-button-${ align }` ]: align,
		} )

		const defaultEditDesign = (
			<div className={ mainClasses }>
				{ range( 1, buttons + 1 ).map( i => {
					const text = attributes[ `text${ i === 1 ? '' : i }` ]
					const size = attributes[ `size${ i === 1 ? '' : i }` ]
					const design = attributes[ `design${ i === 1 ? '' : i }` ]
					const color = attributes[ `color${ i === 1 ? '' : i }` ]
					const textColor = attributes[ `textColor${ i === 1 ? '' : i }` ]
					const icon = attributes[ `icon${ i === 1 ? '' : i }` ]
					return (
						<ButtonEdit key={ i }
							onChange={ text => setAttributes( { [ `text${ i === 1 ? '' : i }` ]: text } ) }
							icon={ icon }
							size={ size }
							backgroundColor={ color }
							color={ textColor }
							text={ text }
							borderRadius={ cornerButtonRadius }
							design={ design }
							onClick={ () => {
								this.setState( { selectedButton: i } )
							} }
							onSelect={ () => {
								this.setState( { selectedButton: i } )
							} }
						/>
					)
				} ) }
			</div>
		)

		const editDesign = applyFilters( 'stackable.button.edit.designs', defaultEditDesign, design, this.props )

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ align => {
							setAttributes( { align } )
						} }
						controls={ [ 'left', 'center', 'right', 'full' ] }
					/>
				</BlockControls>
				<InspectorControls>
					{ isPro &&
						<PanelButtonSettings
							initialOpen={ true }
							title={ __( 'General Settings' ) }
							buttonBorderRadius={ cornerButtonRadius }
							onChangeButtonBorderRadius={ cornerButtonRadius => setAttributes( { cornerButtonRadius } ) }
						>
							{ applyFilters( 'stackable.button.edit.inspector.general', null, this.props ) }
						</PanelButtonSettings>
					}
					<PanelButtonSettings
						title={ ! isPro && ! showProNotice ? __( 'Button Settings' ) : __( 'Button #1 Settings' ) }
						initialOpen={ true }
						buttonDesign={ design }
						buttonColor={ color }
						buttonTextColor={ textColor }
						buttonSize={ size }
						onChangeButtonColor={ color => setAttributes( { color } ) }
						onChangeButtonTextColor={ textColor => setAttributes( { textColor } ) }
						onChangeButtonSize={ size => {
							setAttributes( { size } )
						} }
						onChangeButtonDesign={ design => {
							setAttributes( { design } )
						} }
						buttonBorderRadius={ cornerButtonRadius }
						onChangeButtonBorderRadius={ ! isPro && ( cornerButtonRadius => setAttributes( { cornerButtonRadius } ) ) }
						buttonIcon={ icon }
						onChangeButtonIcon={ icon => setAttributes( { icon } ) }
					>
						{ showProNotice && <ProControl size="small" /> }
					</PanelButtonSettings>
					{ showProNotice &&
						<PanelBody
							initialOpen={ false }
							title={ __( 'Button #2 Settings' ) }
						>
							<ProControl
								title={ __( 'Say Hello to Side by Side Buttons 👋' ) }
								description={ __( 'Give your visitors more buttons to choose from. This feature is only available on Stackable Pro' ) }
							/>
						</PanelBody>
					}
					{ showProNotice &&
						<PanelBody
							initialOpen={ false }
							title={ __( 'Button #3 Settings' ) }
						>
							<ProControl
								title={ __( 'Say Hello to Side by Side Buttons 👋' ) }
								description={ __( 'Give your visitors more buttons to choose from. This feature is only available on Stackable Pro' ) }
							/>
						</PanelBody>
					}
					{ applyFilters( 'stackable.button.edit.inspector.end', null, this.props ) }
				</InspectorControls>
				{ editDesign }
				{ isSelected &&
					<div className={ `ugb-button-group-urls ugb-selected-button-${ this.state.selectedButton } ugb-num-${ buttons }` }>
						{ range( 1, buttons + 1 ).map( i => {
							const url = attributes[ `url${ i === 1 ? '' : i }` ]
							return (
								<form key={ i }
									onSubmit={ event => event.preventDefault() }
									className="blocks-button__inline-link">
									<Dashicon icon="admin-links" />
									<URLInput
										value={ url }
										onChange={ url => setAttributes( { [ `url${ i === 1 ? '' : i }` ]: url } ) }
									/>
									<IconButton
										icon="editor-break"
										label={ __( 'Apply' ) }
										type="submit"
									/>
								</form>
							)
						} ) }
					</div>
				}
			</Fragment>
		)
	}
}

export default edit
