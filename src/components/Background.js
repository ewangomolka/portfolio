import React from 'react';
import ParticleBackground from 'react-particle-backgrounds'
import './Background.css';

const Background = () => {

    const settings = {
        canvas: {
          canvasFillSpace: true,
          width: 200,
          height: 200,
          useBouncyWalls: false
        },
        particle: {
          particleCount: 50,
          color: '#0A9776',
          minSize: 5,
          maxSize: 25
        },
        velocity: {
          directionAngle: 0,
          directionAngleVariance: 360,
          minSpeed: null,
          maxSpeed: 0.5
        },
        opacity: {
          minOpacity: 0,
          maxOpacity: 0.5,
          opacityTransitionTime: 10000
        }
      }

    return ( 
        <div className='background-wrap'>
            <ParticleBackground settings={settings}/>
        </div>
     );
}
 
export default Background;