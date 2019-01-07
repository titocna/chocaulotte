import domReady from '@wordpress/dom-ready'

domReady( () => {
	require( 'waypoints/lib/noframework.waypoints.js' )
	const elems = document.querySelectorAll( '.ugb-countup .ugb-counter' )
	elems.forEach( el => {
		// initCountUp( el )
		el.classList.add( 'ugb-countup-hide' )
		new Waypoint( {
			element: el,
			handler: function() {
				initCountUp( el )
				el.classList.remove( 'ugb-countup-hide' )
				this.destroy()
			},
			offset: 'bottom-in-view',
		} )
	} )
} )

const stopCountUp = el => {
	clearTimeout( el.countUpTimeout )
	if ( el._countUpOrigInnerHTML ) {
		el.innerHTML = el._countUpOrigInnerHTML
		el._countUpOrigInnerHTML = undefined
	}
	el.style.visibility = ''
}
const initCountUp = el => {
	let k, i, num, isComma
	let isFloat, decimalPlaces, val, newNum

	stopCountUp( el )

	// If no number, don't do anything.
	if ( ! /[0-9]/.test( el.innerHTML ) ) {
		return
	}

	// Remember the element.
	el._countUpOrigInnerHTML = el.innerHTML

	// Check location language.
	const lang = document.querySelector( 'html' ).getAttribute( 'lang' ) || undefined

	// Get the given time and delay by their attributes.
	const time = el.getAttribute( 'data-duration' )
	const delay = el.getAttribute( 'data-delay' )

	// Number of times the number will change.
	const divisions = time / delay

	// Split numbers and html tags.
	const splitValues = el.innerHTML.split( /(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/ )

	// Contains all numbers to be displayed.
	const nums = []

	// Set blank strings to ready the split values.
	for ( k = 0; k < divisions; k++ ) {
		nums.push( '' )
	}

	// Loop through all numbers and html tags.
	for ( i = 0; i < splitValues.length; i++ ) {
		// If number split it into smaller numbers and insert it to nums.
		if ( /([0-9.][,.0-9]*[0-9]*)/.test( splitValues[ i ] ) && ! /<[^>]+>/.test( splitValues[ i ] ) ) {
			num = splitValues[ i ]

			// Test if numbers have comma.
			isComma = /[0-9]+,[0-9]+/.test( num )

			// Remove comma for computation purposes.
			num = num.replace( /,/g, '' )

			// Test if values have point.
			isFloat = /^[0-9]+\.[0-9]+$/.test( num )

			// Check number of decimals places.
			decimalPlaces = isFloat ? ( num.split( '.' )[ 1 ] || [] ).length : 0

			// Start adding numbers from the end.
			k = nums.length - 1

			// Create small numbers
			for ( val = divisions; val >= 1; val-- ) {
				newNum = parseInt( num / divisions * val, 10 )

				// If has decimal point, add it again.
				if ( isFloat ) {
					newNum = parseFloat( num / divisions * val ).toFixed( decimalPlaces )
					newNum = parseFloat( newNum ).toLocaleString( lang )
				}

				// If has comma, add it again.
				if ( isComma ) {
					newNum = newNum.toLocaleString( lang )
				}

				// Insert all small numbers.
				nums[ k-- ] += newNum
			}
		} else {
			// Insert all non-numbers in the same place.
			for ( k = 0; k < divisions; k++ ) {
				nums[ k ] += splitValues[ i ]
			}
		}
	}

	// The last value of the element should be the original one.
	nums[ nums.length ] = el.innerHTML

	el.innerHTML = nums[ 0 ]
	el.style.visibility = 'visible'

	// Function for displaying output with the set time and delay.
	const output = function() {
		el.innerHTML = nums.shift()
		if ( nums.length ) {
			clearTimeout( el.countUpTimeout )
			el.countUpTimeout = setTimeout( output, delay )
		} else {
			el._countUpOrigInnerHTML = undefined
		}
	}
	el.countUpTimeout = setTimeout( output, delay )
}
