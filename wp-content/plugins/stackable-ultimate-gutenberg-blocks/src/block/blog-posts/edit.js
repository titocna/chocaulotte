import './designs'
import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { DesignPanelBody, ProControl } from '@stackable/components/'
import { isUndefined, pickBy } from 'lodash'
import {
	PanelColorSettings, InspectorControls, BlockControls, AlignmentToolbar,
} from '@wordpress/editor'
import {
	PanelBody, QueryControls, ToggleControl, TextControl, RangeControl, SelectControl, Placeholder, Spinner,
} from '@wordpress/components'
import { Fragment } from '@wordpress/element'
import { decodeEntities } from '@wordpress/htmlEntities'
import { applyFilters } from '@wordpress/hooks'
import { withSelect } from '@wordpress/data'
import { dateI18n, format } from '@wordpress/date'
import { showProNotice } from 'stackable'

const featuredImageShapes = [
	{ value: 'full', label: __( 'Full-sized' ) },
	{ value: 'square', label: __( 'Square' ) },
	{ value: 'landscape', label: __( 'Landscape' ) },
	{ value: 'portrait', label: __( 'Portrait' ) },
]

export const _edit = props => {
	const {
		attributes, categoriesList, setAttributes, latestPosts, className,
	} = props
	const {
		contentAlign, columns, order, orderBy, categories, postsToShow,
		displayFeaturedImage, featuredImageShape, displayTitle, displayCategory, displayComments,
		displayAuthor, displayDate, displayExcerpt, displayReadMoreLink, readMoreText,
		design, accentColor,
	} = attributes

	const hasPosts = Array.isArray( latestPosts ) && latestPosts.length
	const mainClasses = classnames( [
		className,
		'ugb-blog-posts',
		`columns-${ columns }`,
		`feature-image-shape-${ featuredImageShape }`,
		`design-${ design }`,
	], {
		[ `align-${ contentAlign }` ]: contentAlign,
	} )

	const mainStyles = {
		'--s-accent-color': accentColor ? accentColor : undefined,
	}

	const inspectorControls = (
		<InspectorControls>
			<DesignPanelBody
				initialOpen={ true }
				selected={ design }
				options={ [
					{
						label: 'Basic', value: 'basic', image: 'block/blog-posts/images/basic.png',
					},
					{
						label: 'List', value: 'list', image: 'block/blog-posts/images/list.png',
					},
				] }
				onChange={ design => {
					setAttributes( { design } )
				} }
			>
				{ showProNotice && <ProControl size="small" /> }
			</DesignPanelBody>
			<PanelBody title={ __( 'Posts Settings' ) }>
				<QueryControls
					{ ...{ order, orderBy } }
					numberOfItems={ postsToShow }
					categoriesList={ categoriesList }
					selectedCategoryId={ categories }
					onOrderChange={ order => setAttributes( { order } ) }
					onOrderByChange={ orderBy => setAttributes( { orderBy } ) }
					onCategoryChange={ value => setAttributes( { categories: '' !== value ? value : undefined } ) }
					onNumberOfItemsChange={ postsToShow => setAttributes( { postsToShow } ) }
				/>
				<RangeControl
					label={ __( 'Columns' ) }
					value={ columns }
					onChange={ columns => setAttributes( { columns } ) }
					min={ 1 }
					max={ 4 }
				/>
				<ToggleControl
					label={ __( 'Display Title' ) }
					checked={ displayTitle }
					onChange={ displayTitle => setAttributes( { displayTitle } ) }
				/>
				<ToggleControl
					label={ __( 'Display Featured Image' ) }
					checked={ displayFeaturedImage }
					onChange={ displayFeaturedImage => setAttributes( { displayFeaturedImage } ) }
				/>
				{ displayFeaturedImage &&
				<SelectControl
					label={ __( 'Featured Image Shape' ) }
					options={ featuredImageShapes }
					value={ featuredImageShape }
					onChange={ featuredImageShape => setAttributes( { featuredImageShape } ) }
				/>
				}
				<ToggleControl
					label={ __( 'Display Excerpt' ) }
					checked={ displayExcerpt }
					onChange={ displayExcerpt => setAttributes( { displayExcerpt } ) }
				/>
				<ToggleControl
					label={ __( 'Display Category' ) }
					checked={ displayCategory }
					onChange={ displayCategory => setAttributes( { displayCategory } ) }
				/>
				<ToggleControl
					label={ __( 'Display Date' ) }
					checked={ displayDate }
					onChange={ displayDate => setAttributes( { displayDate } ) }
				/>
				<ToggleControl
					label={ __( 'Display Author' ) }
					checked={ displayAuthor }
					onChange={ displayAuthor => setAttributes( { displayAuthor } ) }
				/>
				<ToggleControl
					label={ __( 'Display Comments' ) }
					checked={ displayComments }
					onChange={ displayComments => setAttributes( { displayComments } ) }
				/>
				<ToggleControl
					label={ __( 'Display Continue Reading Link' ) }
					checked={ displayReadMoreLink }
					onChange={ displayReadMoreLink => setAttributes( { displayReadMoreLink } ) }
				/>
				{ displayReadMoreLink &&
				<TextControl
					label={ __( 'Customize Read More Link' ) }
					type="text"
					value={ readMoreText }
					onChange={ readMoreText => setAttributes( { readMoreText } ) }
				/>
				}
			</PanelBody>
			<PanelColorSettings
				initialOpen={ true }
				title={ __( 'Color Settings' ) }
				colorSettings={ [
					{
						value: accentColor,
						onChange: accentColor => setAttributes( { accentColor } ),
						label: __( 'Accent Color' ),
					},
				] }
			></PanelColorSettings>
		</InspectorControls>
	)

	if ( ! hasPosts ) {
		return (
			<Fragment>
				{ inspectorControls }
				<Placeholder
					icon="admin-post"
					label={ __( 'Posts' ) }
				>
					{ ! Array.isArray( latestPosts ) ?
						<Spinner /> :
						__( 'No posts found.' )
					}
				</Placeholder>
			</Fragment>
		)
	}

	// Removing posts from display should be instant.
	const displayPosts = latestPosts.length > postsToShow ?
		latestPosts.slice( 0, postsToShow ) :
		latestPosts

	return (
		<Fragment>
			{ inspectorControls }
			<BlockControls>
				<AlignmentToolbar
					value={ contentAlign }
					onChange={ contentAlign => setAttributes( { contentAlign } ) }
				/>
			</BlockControls>
			<div className={ mainClasses } style={ mainStyles }>
				{ displayPosts.map( ( post, i ) => {
					const sizeName = featuredImageShape !== 'full' && columns < 2 ? `${ featuredImageShape }_large` : featuredImageShape
					const featuredImageSrc = post.featured_image_urls[ sizeName ][ 0 ]

					// Ready the different blog post components.
					const category = displayCategory && post.category_list && (
						<div className="ugb-blog-posts__category-list" dangerouslySetInnerHTML={ { __html: post.category_list } } />
					)
					const featuredImage = displayFeaturedImage && featuredImageSrc && (
						<figure className="ugb-blog-posts__featured-image">
							<a href={ post.link } target="_blank">
								<img src={ featuredImageSrc } alt={ __( 'featured' ) } />
							</a>
						</figure>
					)
					const author = displayAuthor && post.author_info && (
						<span>{ post.author_info.name }</span>
					)
					const date = displayDate && post.date_gmt && (
						<time dateTime={ format( 'c', post.date_gmt ) } className={ 'date' }>
							{ dateI18n( 'F d, Y', post.date_gmt ) }
						</time>
					)
					const comments = displayComments && (
						<span>{ post.comments_num }</span>
					)
					const title = displayTitle && (
						<h3 className="ugb-blog-posts__title">
							<a href={ post.link }>{ decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }</a>
						</h3>
					)
					const excerpt = displayExcerpt && post.excerpt && (
						<div className="ugb-blog-posts__excerpt" dangerouslySetInnerHTML={ { __html: post.post_excerpt_stackable } } />
					)
					const readMore = displayReadMoreLink && (
						<p className="ugb-blog-posts__read_more"><a href={ post.link }>{ readMoreText ? readMoreText : __( 'Continue reading' ) }</a></p>
					)

					const defaultEditDesign = (
						<article key={ i } className="hentry">
							{ category }
							{ featuredImage }
							{ ( displayDate || displayAuthor || displayComments ) &&
							<aside className="entry-meta ugb-blog-posts__meta">
								{ author }
								{ displayAuthor && ( displayDate || displayComments ) &&
									<span className="ugb-blog-posts__sep">&middot;</span>
								}
								{ date }
								{ displayDate && displayComments &&
									<span className="ugb-blog-posts__sep">&middot;</span>
								}
								{ comments }
							</aside>
							}
							{ title }
							{ excerpt }
							{ readMore }
						</article>
					)

					const passedProps = {
						...props,
						i,
						featuredImageSrc,
						category,
						featuredImage,
						author,
						date,
						comments,
						title,
						excerpt,
						readMore,
					}
					return applyFilters( 'stackable.designs.blog-posts.edit', defaultEditDesign, design, passedProps )
				} ) }
			</div>
		</Fragment>
	)
}

const edit = withSelect( ( select, props ) => {
	const {
		postsToShow, order, orderBy, categories,
	} = props.attributes
	const { getEntityRecords } = select( 'core' )
	const latestPostsQuery = pickBy( {
		categories,
		order,
		orderby: orderBy,
		per_page: postsToShow, // eslint-disable-line camelcase
	}, value => ! isUndefined( value ) )
	const categoriesListQuery = {
		per_page: 100, // eslint-disable-line camelcase
	}
	return {
		latestPosts: getEntityRecords( 'postType', 'post', latestPostsQuery ),
		categoriesList: getEntityRecords( 'taxonomy', 'category', categoriesListQuery ),
	}
} )( _edit )

export default edit
