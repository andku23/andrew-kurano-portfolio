varying vec2 vUv0;
varying vec4 myWorldPosition;
uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;
uniform vec4 grassColorBottom;
uniform vec4 grassColorTop;

//in vec4 myWorldPosition;

/*uniform sampler2D uDiffuseMap;
uniform sampler2D uHeightMap;
uniform float uTime;*/

void main(void)
{
    /*float height = texture2D(uHeightMap, vUv0).r;
    vec4 color = texture2D(uDiffuseMap, vUv0);
    if (height < uTime) {
      discard;
    }
    if (height < (uTime+0.04)) {
      color = vec4(0, 0.2, 1, 1.0);
    }*/
    //gl_FragColor = vec4(0, 0.2, 1, 1.0);
    gl_FragColor = mix(grassColorBottom, grassColorTop, myWorldPosition.y/2.0);
    
}