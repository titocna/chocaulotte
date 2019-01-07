import { __ } from '@wordpress/i18n'
import { renderToString } from '@wordpress/element'
import seed from 'seed-random'

/**
 * Returns an array range of numbers.
 *
 * @param {number} start Starting number range.
 * @param {number} end Ending number range.
 *
 * @return {Array} The range of start to end.
 *
 * @see https://stackoverflow.com/questions/36947847/how-to-generate-range-of-numbers-from-0-to-n-in-es2015-only
 */
export const range = ( start, end ) => {
	return Array.from( { length: ( end - start ) }, ( v, k ) => k + start )
}

/**
 * Renders an SVG WP Component into a string.
 * renderToString lowercases some attributes, this fixes those.
 *
 * @param {Component} svgComponent
 * @param {boolean} esc Escape `#` in the returned string.
 *
 * @return {string} The SVG as a string.
 *
 */
export const svgRenderToString = ( svgComponent, esc = true ) => {
	const s = renderToString( svgComponent )
		.replace( /viewbox/i, 'viewBox' )

	if ( esc ) {
		return s.replace( /#/g, '%23' ) // Using unescaped '#' characters in a data URI body is deprecated and will be removed in M71, around December 2018. Please use '%23' instead. See https://www.chromestatus.com/features/5656049583390720 for more details.
	}
	return s
}

/**
 * From a URL, get the video ID and provider: YouTube or Vimeo.
 *
 * @param {string} url
 *
 * @return {Object} An object containing the video ID and provider name.
 */
export const getVideoProviderFromURL = url => {
	let id = ''

	// Check for YouTube.
	id = ( url.match( /youtube\.com\/watch\?v=([^\&\?\/]+)/i ) || [] )[ 1 ]

	if ( ! id ) {
		id = ( url.match( /youtube\.com\/embed\/([^\&\?\/]+)/i ) || [] )[ 1 ]
	}
	if ( ! id ) {
		id = ( url.match( /youtube\.com\/v\/([^\&\?\/]+)/i ) || [] )[ 1 ]
	}
	if ( ! id ) {
		id = ( url.match( /youtu\.be\/([^\&\?\/]+)/i ) || [] )[ 1 ]
	}

	if ( id ) {
		return {
			type: 'youtube',
			id,
		}
	}

	// Check for Vimeo.
	id = ( url.match( /vimeo\.com\/(\w*\/)*(\d+)/i ) || [] )[ 2 ]
	if ( ! id ) {
		id = ( url.match( /^\d+$/i ) || [] )[ 0 ]
	}

	if ( id ) {
		return {
			type: 'vimeo',
			id,
		}
	}

	return {
		type: 'youtube',
		id: url,
	}
}

const randomElementSeed = seed( 'stackable' )

/**
 * Pick a random element from an array.
 *
 * @param {Array} arr Pick a random element from this array
 * @param {function} seed A random number function to use
 *
 * @return {Object} A random element
 */
const randomElement = ( arr, seed = randomElementSeed ) => {
	return arr[ Math.floor( seed() * arr.length ) ]
}

/**
 * A placeholder text to use, this is to standardize the lorem ipsum
 * dummy text of blocks when adding them.
 *
 * @param {string} type The type of text to return: button, title, short, medium or paragraph
 *
 * @return {string} Placeholder text
 */
export const placeholderText = type => {
	if ( type === 'button' ) {
		return randomElement( [
			__( 'Click here' ),
			__( 'Enter text' ),
			__( 'Read more' ),
			__( 'View more' ),
			__( 'Button text' ),
		] )
	} else if ( type === 'title' ) {
		return randomElement( [
			__( 'Blocks for Everyone' ),
			__( 'Build Stunning Webpages with Stackable' ),
			__( 'Take Stackable for a Spin Now' ),
			__( 'Stackable Supercharges the Block Editor' ),
		] )
	} else if ( type === 'short' ) {
		return randomElement( [
			__( 'Blocks for everyone' ),
			__( 'Build stunning webpages with Stackable' ),
			__( 'Take Stackable for a spin Now' ),
			__( 'Stackable supercharges the block editor' ),
			__( 'Use our beautifully crafted blocks' ),
		] )
	} else if ( type === 'medium' ) {
		return randomElement( [
			__( 'The new WordPress editor gives you a cool way to create your pages using blocks.' ),
			__( 'Stackable supercharges the block editor, and turns it into a page builder.' ),
			__( 'Apart from adding new blocks, Stackable adds more options and settings for you to tinker with.' ),
			__( 'All That You Need to Build a Kick-Ass Website with the New WordPress Editor' ),
			__( 'You can change the layout and colors of each block for the ultimate flexibility.' ),
			__( 'We have a lot of awesome blocks. But if you\'re overwhelmed with awesomeness, you can hide some of them.' ),
		] )
	}
	return randomElement( [
		__( 'The new WordPress editor gives you a cool way to create your pages using blocks. Stackable supercharges the block editor, and turns it into a page builder. Get Stackable today.' ),
		__( 'Get Stackable today. Apart from adding new blocks, it gives the block editor more options and settings to tinker with, expanding the editor\'s functionality.' ),
		__( 'We\'ve come up with a collection of cool blocks that will make website building a breeze. We made sure our blocks look great, fresh and responsive.' ),
	] )
}
