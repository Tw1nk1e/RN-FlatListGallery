// @flow

export function getWindowPos(ref) {
  ref.measure((fx, fy, width, height, px, py) => {
    console.log(`X offset to frame: ${fx}`);
    console.log(`Y offset to frame: ${fy}`);
    console.log(`X offset to page: ${px}`);
    console.log(`Y offset to page: ${py}`);
    console.log('23523875235892735897235897');
  });
}
