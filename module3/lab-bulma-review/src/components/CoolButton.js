import React from 'react';



class CoolButton extends React.Component {

render(){

    // let classes = "button";
    // if(this.props.isSmall){
    //     classes +=" is-small"
    // }
    // if(this.props.isRounded){
    //     classes +=" is-rounded"
    // }
    // if(this.props.isDanger){
    //     classes +=" is-danger"
    // }
    // if(this.props.isSuccess){
    //     classes +=" is-success"
    // }
    // ^ this is a simpler version thats totally fine if you dont have that many possibilites for clases being passed in
    // if you have a lot of classes though, use the thing belo

  let legend =  {
        isActive: 'is-active',
        isBlack: 'is-black',
        isCentered: 'is-centered',
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isFocused: 'is-focused',
        isGrouped: 'is-grouped',
        isHovered: 'is-hovered',
        isInfo: 'is-info',
        isInverted: 'is-inverted',
        isLarge: 'is-large',
        isLight: 'is-light',
        isLink: 'is-link',
        isLoading: 'is-loading',
        isMedium: 'is-medium',
        isOutlined: 'is-outlined',
        isPrimary: 'is-primary',
        isRight: 'is-right',
        isRounded: 'is-rounded',
        isSelected: 'is-selected',
        isSmall: 'is-small',
        isStatic: 'is-static',
        isSuccess: 'is-success',
        isText: 'is-text',
        isWarning: 'is-warning',
        isWhite: 'is-white',
      }

      let classes = "button"

      Object.keys(legend).forEach((eachKey)=>{

        if(this.props[eachKey]){
        classes +=" "+legend[eachKey]
        }
      })





    return(
        <button style={{margin: "20px"}}
         className = {classes}> 

             This is Coolbutton
        </button>
    )
}




}

export default CoolButton;