uniform float uTime;
uniform float blowScale;
uniform sampler2D wind_ramp;

mat4 getModelMatrix() {
    return matrix_model;
}

vec4 getPosition(){
    //Get world position with instanced matrix
    dModelMatrix = getModelMatrix();
    vec3 localPos = vertex_position;
    vec4 posW = dModelMatrix * vec4(localPos, 1.0);
    dPositionW = posW.xyz;
    
    float gustAmount = 0.5*sin(uTime+posW.x) + 0.5;
    
    float swayAmount = blowScale*0.2*sin(uTime*3.14/4.0);
    float swayEffect = texture2D(wind_ramp, vertex_texCoord0.xy).r;
    
    vec4 screenPos = matrix_viewProjection * (posW+vec4(swayAmount*swayEffect*gustAmount, 0.0, swayAmount* swayEffect*gustAmount, 0.0));
    
    return screenPos;
}

vec3 getWorldPosition() {
    return dPositionW;
}
