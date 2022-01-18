const ROOT = "glry/";

const imgs = ["23674830_2200412179984373_2481314641104593806_o-1030x684.jpg"
        ,"23674960_2200412593317665_3960535609147685570_o-684x1030.jpg"
        ,"23800141_2200412459984345_8776987885333163168_o-1030x684.jpg"
        ,"DSC_0307.JPG"
        ,"DSC_0308.JPG"
        ,"DSC_0311.JPG"
        ,"DSC_0312.JPG"
        ,"DSC_0313.JPG"
        ,"DSC_0314.JPG"
        ,"DSC_0317.JPG"
        ,"DSC_0323.JPG"
        ,"DSC_0324.JPG"
        ,"DSC_0325.JPG"
        ,"DSC_0327.JPG"
        ,"DSC_0329.JPG"
        ,"DSC_0334.JPG"
        ,"DSC_0335.JPG"
        ,"DSC_0336.JPG"
        ,"DSC_0337.JPG"
        ,"DSC_0339.JPG"
        ,"DSC_0342.JPG"
        ,"DSC_0344.JPG"
        ,"DSC_0345.JPG"];

export function getImages() {
    return imgs.map(function(el) {return ROOT + el;})
}

export function getCaptions() {
    return []
}
