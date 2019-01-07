import classnames from 'classnames'
import { RichText } from '@wordpress/editor'
import { ArrowIcon } from './index'

const save = props => {
	const { className } = props
	const {
		headingColor,
		headingBackgroundColor,
		heading,
		text,
		openStart,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-accordion',
	] )

	return (
		<div className={ mainClasses }>
			<input type="checkbox" checked={ openStart ? 'checked' : null } />
			<div className="ugb-accordion__heading"
				style={ {
					backgroundColor: headingBackgroundColor ? headingBackgroundColor : undefined,
				} }
			>
				<RichText.Content
					tagName="h4"
					style={ { color: headingColor ? headingColor : undefined } }
					value={ heading }
				/>
				{ ArrowIcon( {
					fill: headingColor ? headingColor : undefined,
				} ) }
			</div>
			<RichText.Content
				tagName="p"
				className="ugb-accordion__text"
				value={ text }
			/>
		</div>
	)
}

export default save
