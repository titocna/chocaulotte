import { BaseControl } from '@wordpress/components'
import { Fragment, Component } from '@wordpress/element'
import { withInstanceId } from '@wordpress/compose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library, config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false
config.autoReplaceSvg = false
config.familyPrefix = 'ugbfa'
config.keepOriginalSource = false
config.observeMutations = false
config.showMissingIcons = false

// We need to add all the available icons in the Font Awesome library so we can display them.
library.add( fab, far, fas )
// fab 391
// far 152
// fas 869

// Limit to 100 searches as not to stall the browser.
const MAX_SEARCH_ICONS = 100

export const searchIconName = search => {
	const lowerSearch = search && search.toLowerCase()
	const results = [
		...Object.values( fab ).filter( icon => icon.iconName.includes( lowerSearch ) ).slice( 0, MAX_SEARCH_ICONS ),
		...Object.values( far ).filter( icon => icon.iconName.includes( lowerSearch ) ).slice( 0, MAX_SEARCH_ICONS ),
		...Object.values( fas ).filter( icon => icon.iconName.includes( lowerSearch ) ).slice( 0, MAX_SEARCH_ICONS ),
	]

	return results.slice( 0, MAX_SEARCH_ICONS )
}

export const searchIcon = ( search, onChange = () => {} ) => {
	const results = searchIconName( search )

	const onClick = event => {
		onChange( event.currentTarget.getAttribute( 'data-value' ) )
	}

	return (
		<Fragment>
			{ results.map( ( { prefix, iconName } ) => {
				return <button key={ `${ prefix }-${ iconName }` }
					className="components-button is-button is-default"
					data-value={ `${ prefix }-${ iconName }` }
					onClick={ onClick }
				>
					<FontAwesomeIcon icon={ [ prefix, iconName ] } />
				</button>
			} ) }
		</Fragment>
	)
}

export const getIconArray = value => {
	if ( typeof value !== 'string' ) {
		return null
	}
	if ( ! value.match( /\w*-/ ) ) {
		return null
	}
	return [
		value.match( /\w*/ ), // Prefix.
		value.match( /\w+-(.*)$/ )[ 1 ], // Icon name.
	]
}

class IconControl extends Component {
	constructor() {
		super( ...arguments )
		this.state = { focused: false }
		this.handleBlur = this.handleBlur.bind( this )
		this.handleFocus = this.handleFocus.bind( this )
	}

	componentWillReceiveProps( nextProps ) {
		if ( nextProps.focused !== this.props.focused ) {
			this.setState( { focused: nextProps.focused } )
		}
	}

	handleBlur() {
		// Add a delay here so that selecting a searched icon won't just hide the search area.
		setTimeout( () => {
			this.setState( { focused: false } )
		}, 100 )
	}

	handleFocus() {
		this.setState( { focused: true } )
	}

	render() {
		const {
			instanceId,
			label,
			help,
			onChange = () => {},
			type = 'text',
			value,
		} = this.props
		const { focused } = this.state

		const id = `inspector-ugb-icon-control-${ instanceId }`
		const onChangeValue = event => {
			onChange( event.target.value )
		}
		const selectedIcon = getIconArray( value )

		return (
			<BaseControl label={ label } help={ help } id={ id } className="ugb-image-control">
				<div className="components-ugb-icon-control__input_wrapper">
					<input className="components-text-control__input"
						{ ...this.props }
						type={ type }
						id={ id }
						value={ value }
						onChange={ onChangeValue }
						onBlur={ this.handleBlur }
						onFocus={ this.handleFocus }
						aria-describedby={ !! help ? id + '__help' : undefined }
					/>
					<div className="components-text-control__icon-preview">
						{ selectedIcon && <FontAwesomeIcon icon={ selectedIcon } /> }
						{ ! selectedIcon && <FontAwesomeIcon icon={ [ 'far', 'smile' ] } style={ { opacity: 0.3 } } /> }
					</div>
				</div>
				{ focused && ( ! selectedIcon || ! value ) &&
				<div className="components-ugb-icon-control__iconlist">
					{ searchIcon( value, onChange ) }
				</div>
				}
			</BaseControl>
		)
	}
}

export default withInstanceId( IconControl )
