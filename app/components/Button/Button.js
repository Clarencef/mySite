import React, { Component } from 'react';
import { ButtonType } from './Button.props';
import { getComponentId } from 'util/object';
import { classHelp } from '../../util/class';
import { assign } from 'util/object';


export default class Button extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let { buttonType, child, href, disabled, onClick } = this.props;
    const renderAsAnchor = !!href;
    const renderTag = renderAsAnchor ? 'a' : 'button';
    console.log(this.props.customClass,classHelp);
    const className = classHelp(this.props.customClass, {
      'btn-normal': buttonType === ButtonType.normal,
      'btn-primary': buttonType === ButtonType.primary,
      'disabled': (renderAsAnchor && disabled)
    });

    return React.createElement(
      renderTag,
      assign(
        {},
        href ? {href} : null,
        renderAsAnchor && {'disabled': disabled},
        { className }
      ),
      <span className='ms-Button-label' id="label" >{ child }</span>,
      <i className="fa fa-fw fa-chevron-right"></i>
    );
  }
}

Button.propTypes = {
  BtnSetting: React.PropTypes.shape({
    btnText: React.PropTypes.string,
    btnClass: React.PropTypes.string
  })
};

// Button.defaultProps = {
//     buttonType: ButtonType.normal
//   };
