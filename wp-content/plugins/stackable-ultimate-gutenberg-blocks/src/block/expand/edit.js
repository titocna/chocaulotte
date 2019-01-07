import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/editor'
import { Fragment } from '@wordpress/element'

const edit = props => {
	const {
		setAttributes,
		className,
		isSelected,
	} = props

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
		<Fragment>
			<div className={ mainClasses }>
				{ /* eslint-disable-next-line jsx-a11y/label-has-for */ }
				{ isSelected && <label className="ugb-editor-label">{ __( 'Less text' ) }</label> }
				<RichText
					multiline="p"
					value={ text }
					onChange={ text => setAttributes( { text } ) }
					className="ugb-expand-less-text"
					placeholder={ __( 'Some short text that can be expanded to show more details.' ) }
				/>
				<RichText
					tagName="a"
					value={ moreLabel }
					onChange={ text => setAttributes( { moreLabel: text } ) }
					formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
					className="ugb-expand-more"
					placeholder={ __( 'Show more' ) }
				/>
				{ /* eslint-disable-next-line jsx-a11y/label-has-for */ }
				{ isSelected && <label className="ugb-editor-label">{ __( 'More text' ) }</label> }
				{
					isSelected &&
					<RichText
						multiline="p"
						value={ moreText }
						onChange={ text => setAttributes( { moreText: text } ) }
						className="ugb-expand-more-text"
						placeholder={ __( 'Some short text that can be expanded to show more details. Some additional text that can only be seen when expanded.' ) }
					/>
				}
				{ isSelected &&
					<RichText
						tagName="a"
						value={ lessLabel }
						onChange={ text => setAttributes( { lessLabel: text } ) }
						formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
						className="ugb-expand-less"
						placeholder={ __( 'Show less' ) }
					/>
				}
			</div>
		</Fragment>
	)
}

export default edit
