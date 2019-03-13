import React from "react";
import styled from "styled-components";

const Robot = ({direction}) => {
    const rotationDegree = {
        'north': '180deg',
        'east': '-90deg',
        'south': '0deg',
        'west': '90deg',
    }
    const RobotWrapper = styled.svg.attrs({
        width: "40",
        height: "30",
        viewbox: "-20 -15 40 30"
      })`
      transform: rotate(${rotationDegree[direction]});
      `;
    return (
        <RobotWrapper>
   <g>
    <rect fill="#ffffff" id="canvas_background" height="32" width="42" y="-1" x="-1"/>
    <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
     <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%"/>
    </g>
   </g>
   <g>
    <title>Layer 1</title>
    <g stroke="null" id="svg_43">
     <rect stroke="#000" id="svg_19" height="5.492958" width="8.788733" y="16.916374" x="22.471832" strokeOpacity="null" strokeWidth="1.5" fill="#013da5"/>
     <rect stroke="#000" id="svg_41" height="6.042254" width="8.788733" y="16.367078" x="9.288733" strokeOpacity="null" strokeWidth="1.5" fill="#013da5"/>
     <ellipse stroke="null" ry="9.612677" rx="15.929578" id="svg_1" cy="10.050177" cx="19.725353" strokeWidth="1.5" fill="#3131f7"/>
     <rect stroke="#000" id="svg_18" height="7.140845" width="12.633804" y="6.479754" x="13.408452" strokeOpacity="null" strokeWidth="1.5" fill="#ff0000"/>
     <g stroke="null" id="svg_42">
      <g stroke="null" id="svg_7">
       <rect stroke="null" id="svg_2" height="12.670334" width="3.252409" y="9.775529" x="32.474798" strokeWidth="1.5" fill="#ff7f00"/>
       <g stroke="null" id="svg_20">
        <rect stroke="null" id="svg_3" height="2.674848" width="10.43662" y="22.797816" x="29.063382" strokeWidth="1.5" fill="#ff7f00"/>
        <rect stroke="null" id="svg_4" height="5.884666" width="2.471831" y="24.402725" x="29.063382" strokeWidth="1.5" fill="#ff7f00"/>
        <rect stroke="null" id="svg_6" height="5.884666" width="2.471831" y="24.402725" x="37.028171" strokeWidth="1.5" fill="#ff7f00"/>
       </g>
      </g>
      <g stroke="null" id="svg_40">
       <rect stroke="null" id="svg_35" height="12.670334" width="3.252409" y="9.775529" x="3.911416" strokeWidth="1.5" fill="#ff7f00"/>
       <g stroke="null" id="svg_39">
        <rect stroke="null" id="svg_36" height="2.674848" width="10.43662" y="22.797816" x="0.5" strokeWidth="1.5" fill="#ff7f00"/>
        <rect stroke="null" id="svg_37" height="5.884666" width="2.471831" y="24.402725" x="0.5" strokeWidth="1.5" fill="#ff7f00"/>
        <rect stroke="null" id="svg_38" height="5.884666" width="2.471831" y="24.402725" x="8.464789" strokeWidth="1.5" fill="#ff7f00"/>
       </g>
      </g>
     </g>
    </g>
   </g>
  </RobotWrapper>

    );
  };
  export default Robot;