attribute vec3 aPosition;
attribute vec2 aUv0;

uniform sampler2D uWaveGradient;
uniform sampler2D uWindGradient;
uniform float uTime;
uniform float worldScaleX;
uniform float worldScaleZ;
uniform float windTimeScale;


uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;

varying vec2 vUv0;
varying vec4 myWorldPosition;

void main(void)
{
    float timeSmall = uTime*2.0;
    float timeBig = uTime/5.0;
    vec4 posW = matrix_model * vec4(aPosition, 1.0);
    
    vec2 sampleXYSmall = vec2(-timeSmall+(posW.z*worldScaleZ), 0);
    //vec2 sampleXYBig = vec2(-timeBig+(posW.z*10.0), 0);
    vec4 color = texture2D(uWaveGradient, sampleXYSmall);
    float windWeight = sin(timeBig);
    vec4 colorSmall = texture2D(uWindGradient, aUv0);
    
    vUv0 = aUv0;
    gl_Position = matrix_viewProjection * matrix_model * vec4(aPosition, 1.0);
    gl_Position += vec4(color.r * posW.y * windWeight*0.6*colorSmall.r, 0, color.r * posW.y * windWeight*0.3*colorSmall.r, 1);
    myWorldPosition = posW;
}