export const ROOT = "glry/";
export let imgs = ["DSC_0307.JPG", "DSC_0311.JPG", "DSC_0313.JPG", "DSC_0315.JPG", "DSC_0321.JPG", "DSC_0324.JPG", "DSC_0327.JPG", "DSC_0332.JPG", "DSC_0335.JPG", "DSC_0337.JPG", "DSC_0342.JPG", "DSC_0345.JPG", "DSC_0308.JPG", "DSC_0312.JPG", "DSC_0314.JPG", "DSC_0317.JPG", "DSC_0323.JPG", "DSC_0325.JPG", "DSC_0329.JPG", "DSC_0334.JPG", "DSC_0336.JPG", "DSC_0339.JPG", "DSC_0344.JPG"];
export function getImages() {
    return imgs.map(function(el) {return ROOT + el;})
}