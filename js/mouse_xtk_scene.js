


sliceX = null;
sliceY = null;
sliceZ = null;


$(function() {

	// initialize with the MRI volume with the youngest dataset
	var volume = new X.volume();
	volume.file = 'Tumors/rescale.nii.gz';
	volume.labelmap.file = 'data/0.14/labelmap.nii.gz';
	volume.labelmap.colortable.file = 'data/colortable.txt';
	volume.labelmap.opacity = 0;
	_MOUSEBRAINID_.volumes[_MOUSEBRAINID_.currentVolume] = volume;


	// 3D rendering
	r0 = new X.renderer3D();
	r0.container = '3d';
	r0.config.INTERMEDIATE_RENDERING = true;
	r0.init();
	r0.add(volume);
	r0.camera.position = [ 0, 0, -200 ]; //
	r0.camera.up = [0, 1, 0];
	r0.onShowtime = function() {
		init_viewer3d();
		init_viewer2d();
		scene_picking();
	};
	r0.render();


});


