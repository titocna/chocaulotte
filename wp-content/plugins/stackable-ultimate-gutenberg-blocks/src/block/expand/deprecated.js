import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/editor'

export const deprecatedSchema_1_3 = {
	text: {
		source: 'html',
		selector: '.ugb-expand-less-text',
		multiline: 'p',
		default: '',
	},
	moreText: {
		source: 'html',
		selector: '.ugb-expand-more-text',
		multiline: 'p',
		default: '',
	},

	// Single lines.
	moreLabel: {
		source: 'html',
		selector: '.ugb-expand-more',
		default: __( 'Show more' ),
	},
	lessLabel: {
		source: 'html',
		selector: '.ugb-expand-less',
		default: __( 'Show less' ),
	},
}

export const deprecatedSave_1_3 = props => {
	const {
		text,
		moreLabel,
		moreText,
		lessLabel,
	} = props.attributes

	return (
		<div>
			<div className="ugb-expand-less-text">
				{ ! RichText.isEmpty( text ) && (
					<RichText.Content
						multiline="p"
						value={ text }
					/>
				) }
			</div>
			<div className="ugb-expand-more-text" style={ { display: 'none' } }>
				{ ! RichText.isEmpty( moreText ) && (
					<RichText.Content
						multiline="p"
						value={ moreText }
					/>
				) }
			</div>
			{ /* eslint-disable-next-line */ }
			<a className="ugb-expand-button" href="#">
				<RichText.Content
					className="ugb-expand-more"
					tagName="span"
					value={ moreLabel }
				/>
				<RichText.Content
					className="ugb-expand-less"
					tagName="span"
					value={ lessLabel }
					style={ { display: 'none' } }
				/>
			</a>
		</div>
	)
}

const deprecated = [
	{
		attributes: deprecatedSchema_1_3,
		save: deprecatedSave_1_3,
	},
]

export default deprecated
