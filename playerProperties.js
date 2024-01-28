const PROPERTY = "target_properties"; // The Property Variable made to change the used DynamicProperty
/**
 * a Class used to manage custom Properties added via DynamicProperties into Minecraft
 *
     * requires a provided Target as Player Object and a Property as String
     * Utilized DynamicPROPERTY for this Class is targetproperties
    * @param {Player} Target
    * @param {string} PROPERTY
    */
export class TargetProperty {
    /**
    * Constructor of the TargetProperty class
    *
    */
    constructor() {
    }
    /** checks for a Property stored within the Player Object @param {Player} Target @param {string} Property */
    hasProperty(Target, Property) {
        if (Property == undefined) {
            Target.setDynamicProperty(PROPERTY, " ");
        }
        return String(Target.getDynamicProperty(PROPERTY)).includes(String(Property).toLowerCase());
    }
    /** removes a Property from the Player Object @param {Player} Target @param {string} Property */
    removeProperty(Target, Property) {
        if (Property == undefined) {
            Target.setDynamicProperty(PROPERTY, " ");
        }
        Target.setDynamicProperty(PROPERTY, String(Target.getDynamicProperty(PROPERTY)).replace(`\n${Property.toLowerCase()}`, ""));
    }
    /** Adds a Property to the Player Object @param {Player} Target @param {string} PROPERTY */
    addProperty(Target, Property) {
        if (Property == undefined) {
            Target.setDynamicProperty(PROPERTY, " ");
        }
        let properties = Target.getDynamicProperty(PROPERTY);
        Target.setDynamicProperty(PROPERTY, String(properties += `\n${Property}`).toLowerCase());
    }
    /** lists all Properties within a Player Object @param {Player} Target */
    listProperties(Target) {
        return Target.getDynamicProperty(PROPERTY);
    }
}
