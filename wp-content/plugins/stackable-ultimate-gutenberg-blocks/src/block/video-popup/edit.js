import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { getVideoProviderFromURL } from '@stackable/util'
import { PanelBackgroundSettings, ProControl } from '@stackable/components'
import {
	Dashicon, IconButton, PanelBody, SelectControl,
} from '@wordpress/components'
import { InspectorControls, URLInput } from '@wordpress/editor'
import { Fragment } from '@wordpress/element'
import { showProNotice } from 'stackable'
import { playButtonTypes, getPlayButton } from './util'

const edit = props => {
	const {
		className,
		setAttributes,
		isSelected,
	} = props
	const {
		videoLink,
		backgroundImageID,
		backgroundImageURL,
		backgroundColor,
		playButtonType,
		backgroundOpacity,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-video-popup',
		'ugb-has-background-opacity-' + ( 1 * Math.round( backgroundOpacity / 1 ) ),
	], {
		'ugb-has-background': backgroundColor || backgroundImageURL,
		'ugb-has-background-image': backgroundImageURL,
	} )

	const mainStyle = {
		backgroundColor: backgroundColor ? backgroundColor : undefined,
		backgroundImage: backgroundImageURL ? `url(${ backgroundImageURL })` : undefined,
		'--ugb-background-color': backgroundImageURL ? backgroundColor : undefined,
	}

	return (
		<Fragment>
			<InspectorControls>
				{ showProNotice &&
					<PanelBody initialOpen={ false } title={ __( 'Design' ) }>
						<ProControl />
					</PanelBody>
				}
				<PanelBody title={ __( 'General Settings' ) }>
					<SelectControl
						label={ __( 'Play Button Style' ) }
						value={ playButtonType }
						options={ playButtonTypes.map( ( { value, label } ) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ newSize => {
							setAttributes( { playButtonType: newSize } )
						} }
					/>
				</PanelBody>
				<PanelBackgroundSettings
					initialOpen={ true }
					backgroundColor={ backgroundColor }
					backgroundImageID={ backgroundImageID }
					backgroundImageURL={ backgroundImageURL }
					backgroundOpacity={ backgroundOpacity }
					onChangeBackgroundColor={ backgroundColor => setAttributes( { backgroundColor } ) }
					onChangeBackgroundImage={ ( { url, id } ) => setAttributes( { backgroundImageURL: url, backgroundImageID: id } ) }
					onRemoveBackgroundImage={ () => {
						setAttributes( { backgroundImageURL: '', backgroundImageID: 0 } )
					} }
					onChangeBackgroundOpacity={ backgroundOpacity => setAttributes( { backgroundOpacity } ) }
				/>
			</InspectorControls>
			<div className={ mainClasses } style={ mainStyle }>
				<div className="ugb-video-wrapper" >
					<span className="ugb-play-button">
						{ getPlayButton( playButtonType ) }
					</span>
				</div>
			</div>
			{ isSelected && (
				<form
					onSubmit={ event => event.preventDefault() }
					className="ugb-video-popup-link blocks-button__inline-link">
					<Dashicon icon={ 'admin-links' } />
					<URLInput
						value={ videoLink }
						onChange={ value => {
							setAttributes( {
								videoLink: value,
								videoID: getVideoProviderFromURL( value ).id,
							} )
						} }
					/>
					<IconButton
						icon={ 'editor-break' }
						label={ __( 'Apply' ) }
						type={ 'submit' }
					/>
					<p className="ugb-video-popup-link-desc"><i>{ __( 'Youtube / Vimeo only' ) }</i></p>
				</form>
			) }
		</Fragment>
	)
}

export default edit
