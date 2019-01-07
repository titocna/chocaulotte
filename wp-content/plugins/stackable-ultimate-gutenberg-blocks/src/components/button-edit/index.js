import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/editor'
import { SvgIcon } from '@stackable/components'

// Deprecated ButtonEdit.Content methods.
export * from './deprecated'

const ButtonEdit = props => {
	const {
		className = '',
		align = 'center',
		size = 'normal',
		color,
		text = '',
		backgroundColor,
		borderRadius = 4,
		isSelected = null,
		onFocus = () => {},
		onChange = () => {},
		icon = null,
		design = 'basic',
	} = props

	const style = {
		borderRadius: design === 'link' ? undefined :
			design === 'plain' ? undefined :
				borderRadius + 'px',
		backgroundColor: backgroundColor ? backgroundColor : undefined,
		borderColor: design === 'ghost' ? backgroundColor : undefined,
		color: design === 'ghost' ? backgroundColor :
			design === 'plain' ? backgroundColor :
				design === 'link' ? undefined :
					color,
	}
	style.backgroundColor = design === 'ghost' ? undefined : style.backgroundColor
	style.backgroundColor = design === 'plain' ? undefined : style.backgroundColor
	style.backgroundColor = design === 'link' ? undefined : style.backgroundColor

	const mainClasses = classnames( [
		className,
		'ugb-button',
		`ugb-button-${ align }`,
		`ugb-button-${ size }`,
	], {
		[ `ugb-${ design }-button` ]: design !== 'basic',
		'ugb-has-icon': icon,
	} )

	return (
		<div
			{ ...props }
			data-is-placeholder-visible={ RichText.isEmpty( text ) }>
			{ /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
			<a
				href="#"
				className={ mainClasses }
				style={ style }
			>
				{ icon && design !== 'link' &&
				<SvgIcon
					value={ icon }
					style={ {
						color: design === 'ghost' ? backgroundColor :
							design === 'plain' ? backgroundColor :
								color,
					} }
				/>
				}
				<RichText
					tagName="span"
					className={ design === 'link' ? '' : 'ugb-button-inner' }
					placeholder={ __( 'Enter Text' ) }
					value={ text }
					onChange={ onChange }
					formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
					onFocus={ onFocus }
					isSelected={ isSelected }
					keepPlaceholderOnFocus
					style={ {
						color: design === 'ghost' ? backgroundColor :
							design === 'plain' ? backgroundColor :
								design === 'link' ? undefined :
									color,
					} }
				/>
			</a>
		</div>
	)
}

ButtonEdit.Content = props => {
	const {
		className = '',
		align = 'center',
		size = 'normal',
		url = '',
		icon = null,
		color,
		text,
		backgroundColor,
		borderRadius,
		design = 'basic',
	} = props

	const style = {
		borderRadius: design === 'link' ? undefined :
			design === 'plain' ? undefined :
				borderRadius + 'px',
		backgroundColor: backgroundColor ? backgroundColor : undefined,
		borderColor: design === 'ghost' ? backgroundColor : undefined,
		color: design === 'ghost' ? backgroundColor :
			design === 'plain' ? backgroundColor :
				design === 'link' ? undefined :
					color,
	}
	style.backgroundColor = design === 'ghost' ? undefined : style.backgroundColor
	style.backgroundColor = design === 'plain' ? undefined : style.backgroundColor
	style.backgroundColor = design === 'link' ? undefined : style.backgroundColor

	const mainClasses = classnames( [
		className,
		'ugb-button',
		`ugb-button-${ align }`,
		`ugb-button-${ size }`,
	], {
		[ `ugb-${ design }-button` ]: design !== 'basic',
		'ugb-has-icon': icon,
	} )

	return (
		<div>
			<a
				className={ mainClasses }
				href={ url }
				style={ style }
			>
				{ icon && design !== 'link' &&
				<SvgIcon
					value={ icon }
					style={ {
						color: design === 'ghost' ? backgroundColor :
							design === 'plain' ? backgroundColor :
								color,
					} }
				/>
				}
				<RichText.Content
					tagName="span"
					className={ design === 'link' ? '' : 'ugb-button-inner' }
					style={ {
						color: design === 'ghost' ? backgroundColor :
							design === 'plain' ? backgroundColor :
								design === 'link' ? undefined :
									color,
					} }
					value={ text }
				/>
			</a>
		</div>
	)
}

export default ButtonEdit
