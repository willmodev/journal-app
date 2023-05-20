export const processUrlImg = (imgUrl) => {
    var cadReplace = imgUrl.substring(0, imgUrl.lastIndexOf('/'));
    const idImg = imgUrl.replace(cadReplace, "")
    var output = idImg.substring(1, idImg.lastIndexOf('.'));
    return "journal/" + output
}