uniform sampler2D texture_ramp;


float getLightDiffuse(vec3 worldNormal, vec3 viewDir, vec3 lightDirNorm, vec3 dLightDirNormW) {
    float light = max(dot(worldNormal, -lightDirNorm), 0.0);
    return texture2D(texture_ramp, vec2(max(light, 0.0), 0.0)).g;
}

