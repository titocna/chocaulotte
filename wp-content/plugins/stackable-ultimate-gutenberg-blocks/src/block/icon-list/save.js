import classnames from 'classnames'
import { RichText } from '@wordpress/editor'
import { getIconSVGBase64 } from './util'

const save = props => {
	const { className } = props
	const {
		icon,
		iconShape,
		iconColor,
		iconSize,
		text,
		columns,
		gap,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-icon-list',
		`ugb-icon-${ icon }`,
		`column-${ columns }`,
	] )

	const iconSVGString = getIconSVGBase64( icon, iconShape, iconColor )
	const style = {
		'--icon': 'url(\'data:image/svg+xml;base64,' + iconSVGString + '\')',
		'--icon-size': iconSize ? `${ iconSize }px` : undefined,
		'--gap': gap ? `${ gap }px` : undefined,
	}

	return (
		<RichText.Content
			tagName="ul"
			className={ mainClasses }
			style={ style }
			value={ text }
		/>
	)
}

export default save
