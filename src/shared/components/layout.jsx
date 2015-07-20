import React from 'react'
import Settings from './settings'
import lodash from 'lodash'
import uid from 'uid'
import {ClearFix} from 'material-ui'
import {List} from 'immutable'

let Layout = React.createClass({
  propTypes: {
    cols: React.PropTypes.number,
    widths: React.PropTypes.shape({
      lg: React.PropTypes.arrayOf(React.PropTypes.number),
      md: React.PropTypes.arrayOf(React.PropTypes.number),
      sm: React.PropTypes.arrayOf(React.PropTypes.number),
      xs: React.PropTypes.arrayOf(React.PropTypes.number),
      xxs: React.PropTypes.arrayOf(React.PropTypes.number)
    }),
    breakpoints: React.PropTypes.shape({
      lg: React.PropTypes.number,
      md: React.PropTypes.number,
      sm: React.PropTypes.number,
      xs: React.PropTypes.number,
      xxs: React.PropTypes.number
    }),
    order: React.PropTypes.object,
    pPadding: React.PropTypes.string,
    cPadding: React.PropTypes.string,
    cMargin: React.PropTypes.string,
    cStyle: React.PropTypes.object,
    cStyles: React.PropTypes.shape({
      lg: React.PropTypes.arrayOf(React.PropTypes.object),
      md: React.PropTypes.arrayOf(React.PropTypes.object),
      sm: React.PropTypes.arrayOf(React.PropTypes.object),
      xs: React.PropTypes.arrayOf(React.PropTypes.object),
      xxs: React.PropTypes.arrayOf(React.PropTypes.object)
    }),
    type: React.PropTypes.string,
    style: React.PropTypes.object
  },

  shouldComponentUpdate() {
    return true;
  },

  getDefaultProps() {
    return {
      breakpoints: {
        lg: Settings.breakpoints.lg,
        md: Settings.breakpoints.md,
        sm: Settings.breakpoints.sm,
        xs: Settings.breakpoints.xs,
        xxs: Settings.breakpoints.xxs,
      },
      cols: Settings.cols
    }
  },

  getChildWidth(i, breakpoint) {

    let breakpoints = Object.keys(Settings.breakpoints);

    if (this.props.widths) {
      if(this.props.widths[breakpoint]) {
        if (typeof this.props.widths[breakpoint][i] === 'number') {
          return ((this.props.widths[breakpoint][i] * 100 )/ this.props.cols)+'%';
        } else {
          return this.props.widths[breakpoint][i] || '100%';
        }
      } else {
        let bidx = breakpoints.indexOf(breakpoint);
        if(bidx > -1) {
          for(let j = bidx - 1; j > -1; j--) {
            if(this.props.widths[breakpoints[j]]) {
              return (this.props.widths[breakpoints[j]][i]) ? ((this.props.widths[breakpoints[j]][i] * 100 )/ this.props.cols)+'%' : '100%';
            }
          }
        }
        return '100%'
      }
    }
    return 'initial';
  },

  getChildStyle(i, breakpoint) {

    let breakpoints = Object.keys(Settings.breakpoints);

    if (this.props.cStyles) {
      if(this.props.cStyles[breakpoint]) {
        return this.props.cStyles[breakpoint][i];
      } else {
        let bidx = breakpoints.indexOf(breakpoint);
        if(bidx > -1) {
          for(let j = bidx - 1; j > -1; j--) {
            if(this.props.cStyles[breakpoints[j]]) {
              return this.props.cStyles[breakpoints[j]][i] || {};
            }
          }
        }
        return {};
      }
    }
    return {};
  },

  getChildStyleCSS(i, breakpoint) {
    return this.getStyleCSS(this.getChildStyle(i, breakpoint));
  },

  getStyleCSS(cStyle) {
    let cStyleCSS='';
    if(typeof cStyle === 'object' && cStyle !== {}){
      let cStyleKeys= Object.keys(cStyle);
      cStyleKeys.forEach((key,i) =>{ cStyleCSS += key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()+': '+cStyle[key]+';' });
    }
    return cStyleCSS;
  },

  style() {
    let style = {
      root: {
        width : (this.props.type === 'main') ? 'initial' : '100%',
        padding: (this.props.type === 'main') ? 'initial' : this.props.pPadding,
        height: (this.props.type === 'center-v') ? '100%' : 'initial'
      },
      child: {
        float: 'left',
        padding: this.props.cPadding || 'initial',
        margin: this.props.cMargin || 'initial'
      }
    }

    if (this.props.type === 'center-h') {
      style.child = _.assign(style.child, {
        position: 'relative',
        margin: '0 auto',
        float: 'none'
      });
    }

    if (this.props.type === 'center-v') {
      style.child = _.assign( style.child, {
        position: 'relative',
        margin: '0 auto',
        top: '50%',
        transform: 'translateY(-50%)',
        float: 'none'
      });
    }
    return style;
  },

  render: function() {
    console.log('layout', 'rendered')
    let pclass = 'p'+uid();
		let children = React.Children.map(this.props.children, (child, i) => {
      let cclass = 'c'+uid();
      return <ClearFix className={cclass} >
        <style>
          {`
            /* general style */
            .${pclass} .${cclass} {
              ${this.getStyleCSS(_.assign(this.style().child, this.props.cStyle))}
            }

            /* lg */
            .${pclass} .${cclass} {
              width: ${this.getChildWidth(i, 'lg')};
              ${this.getChildStyleCSS(i, 'lg')}
            }

            /* md */
            @media (max-width: ${this.props.breakpoints.md}px) {
              .${pclass} .${cclass} {
                  width: ${this.getChildWidth(i, 'md')};
                  ${this.getChildStyleCSS(i, 'md')}
              }
            }
            /* sm */
            @media (max-width: ${this.props.breakpoints.sm}px) {
              .${pclass} .${cclass} {
                  width: ${this.getChildWidth(i, 'sm')};
                  ${this.getChildStyleCSS(i, 'sm')}
              }
            }
            /* xs */
            @media (max-width: ${this.props.breakpoints.xs}px) {
              .${pclass} .${cclass} {
                  width: ${this.getChildWidth(i, 'xs')};
                  ${this.getChildStyleCSS(i, 'xs')}
              }
            }
            /* xxs */
            @media (max-width: ${this.props.breakpoints.xxs}px) {
              .${pclass} .${cclass} {
                  width: ${this.getChildWidth(i, 'xxs')};
              }
            }
          `}
        </style>
        {React.cloneElement(child)}</ClearFix>
    });

    return (
        <ClearFix className={pclass} style={_.assign(this.style().root, this.props.style)}>
          {children}
        </ClearFix>
    );
  }
});

export default Layout;