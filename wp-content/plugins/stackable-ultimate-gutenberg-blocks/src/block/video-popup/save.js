
import classnames from 'classnames'
import { getPlayButton } from './util'

const save = props => {
	const { className } = props
	const {
		videoID,
		playButtonType,
		backgroundImageURL,
		backgroundColor,
		backgroundOpacity,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-video-popup',
		'ugb-has-background-opacity-' + ( 1 * Math.round( backgroundOpacity / 1 ) ),
	], {
		'ugb-has-background': backgroundColor || backgroundImageURL,
		'ugb-has-background-image': backgroundImageURL,
	} )

	const mainStyle = {
		backgroundColor: backgroundColor ? backgroundColor : undefined,
		backgroundImage: backgroundImageURL ? `url(${ backgroundImageURL })` : undefined,
		'--ugb-background-color': backgroundImageURL ? backgroundColor : undefined,
	}

	return (
		<div className={ mainClasses } style={ mainStyle } data-video={ videoID }>
			<div className="ugb-video-wrapper" >
				{ /* eslint-disable-next-line */ }
				<a href="#" />
				<span className="ugb-play-button">
					{ getPlayButton( playButtonType ) }
				</span>
			</div>
		</div>
	)
}

export default save
