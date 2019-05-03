//fumaiolo
class Funnel{

  constructor(){
    this.funnel = new THREE.Object3D();

    var geometry = new THREE.BoxGeometry(1,1,1);

    var materialYellow = new THREE.MeshBasicMaterial( { color: 0xffff00 } );

    var boxYellow = new THREE.Mesh( geometry, materialYellow );
    boxYellow.scale.set(2, 3, 2);
    this.funnel.add(boxYellow);

    var materialBlack = new THREE.MeshBasicMaterial( { color: 0x000000 } );

    var boxBlack = new THREE.Mesh( geometry, materialBlack );
    boxBlack.scale.set(2, 1, 2);
    boxBlack.position.y = 2;
    this.funnel.add(boxBlack);
  }

  getFunnel(){
    return this.funnel;
  }
}
