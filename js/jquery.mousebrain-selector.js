
$(function() {
	$("#mousebrain-selector-slider").slider({
		value: 0,
		min: 0,
		step: 1,
		max: _MOUSEBRAINID_.steps.length-1,
		slide: function (event, ui) {

		//mapping _ATLAS_ to _MOUSEBRAINID_
		
		$("#current_id").val( _MOUSEBRAINID_.valueOf().steps[_MOUSEBRAINID_.currentVolume] );

		    $("#mousebrain-selector-age").val( _MOUSEBRAINID_.steps[ui.value] );
		    // hide current volume
		    _MOUSEBRAINID_.volumes[_MOUSEBRAINID_.currentVolume].visible = false;

/*
		    // hide all meshes
		    for (l in _ATLAS_.meshes[_ATLAS_.currentVolume]) {
		      if (_ATLAS_.meshes[_ATLAS_.currentVolume][l]) {
		        _ATLAS_.meshes[_ATLAS_.currentVolume][l].visible = false;
		      }
		    }
*/

		    // show new volume, load if not loaded before
		    var _volume = _MOUSEBRAINID_.volumes[ui.value];

		    if (!_volume) {

		      // volume was not loaded before
		      console.log('Loading '+_MOUSEBRAINID_.steps[ui.value] )
		      _volume = new X.volume();
		      _volume.file = 'Tumors/' + _MOUSEBRAINID_.steps[ui.value] + '.nii.gz';
  			console.log('Loading '+'Tumors/' + _MOUSEBRAINID_.steps[ui.value] + '.nii.gz' )
			    

		      _volume.labelmap.file = 'data/80/labelmap.nii.gz';
//		      _volume.labelmap.file = 'data/' + _MOUSEBRAINID_.steps[ui.value] + '/labelmap.nii.gz';
		      _volume.labelmap.colortable.file = 'data/colortable.txt';

		      r0.add(_volume);

		      // store it in the cache
		      _MOUSEBRAINID_.volumes[ui.value] = _volume;

	        _MOUSEBRAINID_.currentVolume = ui.value;

		    } else {

	        _MOUSEBRAINID_.currentVolume = ui.value;

		      init_viewer2d();
		    }

		    _volume.visible = true;
        _volume.labelmap.opacity = 0;

		}
	});
	$("#mousebrain-selector-age").val($("#mousebrain-selector-slider").slider("value"));
});

