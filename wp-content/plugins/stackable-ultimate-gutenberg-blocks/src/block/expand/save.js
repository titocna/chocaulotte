import classnames from 'classnames'
import { RichText } from '@wordpress/editor'

const save = props => {
	const { className } = props
	const {
		text,
		moreLabel,
		moreText,
		lessLabel,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-expand',
	] )

	return (
		<div className={ mainClasses }>
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
			{ /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
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

export default save
