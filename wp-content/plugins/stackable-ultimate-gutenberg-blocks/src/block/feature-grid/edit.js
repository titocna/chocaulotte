import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	ImageUploadPlaceholder, ProControl, DesignPanelBody,
} from '@stackable/components'
import {
	IconButton, Dashicon, PanelBody, RangeControl,
} from '@wordpress/components'
import {
	InspectorControls, RichText, URLInput,
} from '@wordpress/editor'
import { Fragment } from '@wordpress/element'
import { applyFilters } from '@wordpress/hooks'
import { showProNotice } from 'stackable'

const edit = props => {
	const {
		isSelected,
		className,
		setAttributes,
	} = props

	const { attributes } = props

	const {
		columns,
		imageSize,
		design,
	} = attributes

	const mainClasses = classnames( [
		className,
		'ugb-feature-grid',
		`columns-${ columns }`,
	], {
		[ `ugb-design-${ design }` ]: design && design !== 'basic',
	} )

	return (
		<Fragment>
			<InspectorControls>
				<DesignPanelBody
					initialOpen={ true }
					selected={ design }
					options={ [
						{
							label: __( 'Basic' ), value: 'basic', image: 'block/feature-grid/images/basic.png',
						},
						{
							label: __( 'Plain' ), value: 'plain', image: 'block/feature-grid/images/plain.png',
						},
						...applyFilters( 'stackable.feature-grid.edit.designs', [] ),
					] }
					onChange={ design => {
						setAttributes( { design } )
					} }
				>
					{ showProNotice && <ProControl size="small" /> }
				</DesignPanelBody>
				<PanelBody title={ __( 'General Settings' ) }>
					<RangeControl
						label={ __( 'Columns' ) }
						value={ columns }
						onChange={ columns => setAttributes( { columns } ) }
						min={ 1 }
						max={ 3 }
					/>
					<RangeControl
						label={ __( 'Image Size %' ) }
						value={ imageSize }
						onChange={ imageSize => setAttributes( { imageSize } ) }
						min={ 0 }
						max={ 100 }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ mainClasses }>
				{ [ 1, 2, 3 ].map( i => {
					const imageUrl = attributes[ `imageUrl${ i }` ]
					const imageID = attributes[ `imageID${ i }` ]
					const title = attributes[ `title${ i }` ]
					const description = attributes[ `description${ i }` ]
					const linkUrl = attributes[ `linkUrl${ i }` ]
					const linkText = attributes[ `linkText${ i }` ]
					return (
						<div key={ i }>
							<div className={ `ugb-feature-grid-item` }>
								<div>
									<ImageUploadPlaceholder
										imageID={ imageID }
										imageURL={ imageUrl }
										onRemove={ () => {
											setAttributes( { [ `imageUrl${ i }` ]: '', [ `imageID${ i }` ]: '' } )
										} }
										onChange={ ( { url, id } ) => {
											setAttributes( { [ `imageUrl${ i }` ]: url, [ `imageID${ i }` ]: id } )
										} }
										render={ <img src={ imageUrl } style={ { width: `${ imageSize }%` } } alt={ title } /> }
										style={ {
											width: imageID ? `${ imageSize }%` : undefined,
										} }
									/>
								</div>
								<RichText
									tagName="h5"
									value={ title }
									onChange={ title => setAttributes( { [ `title${ i }` ]: title } ) }
									placeholder={ __( 'Feature Title' ) }
									keepPlaceholderOnFocus
								/>
								<RichText
									tagName="p"
									value={ description }
									onChange={ description => setAttributes( { [ `description${ i }` ]: description } ) }
									placeholder={ __( 'Some feature description for an awesome feature' ) }
									keepPlaceholderOnFocus
								/>
								<p>
									<a href={ linkUrl }>
										<RichText
											tagName="span"
											value={ linkText }
											onChange={ linkText => setAttributes( { [ `linkText${ i }` ]: linkText } ) }
											placeholder={ __( 'View more' ) }
											formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
											keepPlaceholderOnFocus
										/>
									</a>
								</p>
							</div>
							{
								isSelected && (
									<form
										onSubmit={ event => event.preventDefault() }
										className={ `blocks-button__inline-link pricing-box` }>
										<Dashicon icon={ 'admin-links' } />
										<URLInput
											value={ linkUrl }
											onChange={ url => setAttributes( { [ `linkUrl${ i }` ]: url } ) }
										/>
										<IconButton
											icon={ 'editor-break' }
											label={ __( 'Apply' ) }
											type={ 'submit' }
										/>
									</form>
								)
							}
						</div>
					)
				} ) }
			</div>
		</Fragment>
	)
}

export default edit
