uniform float uTime;
uniform float uWorldScaleZ; //1
uniform float uFlutterSpeed; //8.0
uniform float uFlutterAmp;  //0.3

uniform float uPushAwayEffectRadius; //1.5
uniform float uPushAwayAmount; //0.3

uniform vec3 characterPosition;

mat4 getModelMatrix() {
    return mat4(instance_line1, instance_line2, instance_line3, instance_line4);
}

vec4 getPosition(){
    //Get world position with instanced matrix
    dModelMatrix = getModelMatrix();
    vec3 localPos = vertex_position;
    vec4 posW = dModelMatrix * vec4(localPos, 1.0);
    dPositionW = posW.xyz;
    
    //Get flutter amount from sin
    float flutterAmount = (posW.y) * sin(-uTime*uFlutterSpeed+(posW.z*uWorldScaleZ))*uFlutterAmp;
    float gustAmount = (posW.y) * (0.5*sin(0.01*uTime+(posW.z)) + 0.5);
    
    vec3 grassPushAway;
    vec3 calculatedCharacterPos = vec3(characterPosition.x, posW.y, characterPosition.z);
    vec3 difference = posW.xyz - calculatedCharacterPos;
    vec3 differenceSigns = -(difference / -difference); 
    float distanceB = distance(posW.xyz, calculatedCharacterPos);
    if(distanceB > uPushAwayEffectRadius){
         grassPushAway = vec3(0.0, 0.0, 0.0);
    } else {
        difference.y = -uPushAwayAmount*((uPushAwayEffectRadius - distanceB)/uPushAwayEffectRadius);
        grassPushAway = ((uPushAwayEffectRadius - distanceB)/uPushAwayEffectRadius) *difference *posW.y*posW.y*uPushAwayEffectRadius;
    }
    
    vec4 screenPos;
    screenPos = matrix_viewProjection * ((posW + vec4(gustAmount*flutterAmount+grassPushAway.x, 0, gustAmount*flutterAmount+grassPushAway.z, 0)) + vec4(grassPushAway, 0));

    return screenPos;
}

vec3 getWorldPosition() {
    return dPositionW;
}
