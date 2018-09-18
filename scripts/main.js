var b = navigator.vendor;
//check if user is using chrome
if(b!="Google Inc."){
    alert("I recommend using google chrome. Some funtions may not work.");
}
//
var audio_folder = "2 octaves/"; //notes folder
var audio_ext = ".wav"; //notes audio type
note_duration = 1.3// note duration in secs
var note_Volume = 0.2;
alt_note_duration = 1.8 //altanative note duration

//get all notes
var c_1 = new Audio(audio_folder+"C_1"+audio_ext);
c_1.volume = note_Volume; //this note was a bit loud, lowered its volume.
var db_1 = new Audio(audio_folder+"Db_1"+audio_ext);
var d_1 = new Audio(audio_folder+"D_1"+audio_ext);
var eb_1 = new Audio(audio_folder+"Eb_1"+audio_ext);
var e_1 = new Audio(audio_folder+"E_1"+audio_ext);
var f_1 = new Audio(audio_folder+"F_1"+audio_ext);
var gb_1 = new Audio(audio_folder+"Gb_1"+audio_ext);
var g_1 = new Audio(audio_folder+"G_1"+audio_ext);
var ab_1 = new Audio(audio_folder+"Ab_1"+audio_ext);
var a_1 = new Audio(audio_folder+"A_1"+audio_ext);
var bb_1 = new Audio(audio_folder+"Bb_1"+audio_ext);
var b_1 = new Audio(audio_folder+"B_1"+audio_ext);

var c_2 = new Audio(audio_folder+"C_2"+audio_ext);
var db_2 = new Audio(audio_folder+"Db_2"+audio_ext);
var d_2 = new Audio(audio_folder+"D_2"+audio_ext);
var eb_2 = new Audio(audio_folder+"Eb_2"+audio_ext);
var e_2 = new Audio(audio_folder+"E_2"+audio_ext);
var f_2 = new Audio(audio_folder+"F_2"+audio_ext);
var gb_2 = new Audio(audio_folder+"Gb_2"+audio_ext);
var g_2 = new Audio(audio_folder+"G_2"+audio_ext);
var ab_2 = new Audio(audio_folder+"Ab_2"+audio_ext);
var a_2 = new Audio(audio_folder+"A_2"+audio_ext);
var bb_2 = new Audio(audio_folder+"Bb_2"+audio_ext);
var b_2 = new Audio(audio_folder+"B_2"+audio_ext);

var c_3 = new Audio(audio_folder+"C_3"+audio_ext);
var db_3 = new Audio(audio_folder+"Db_3"+audio_ext);
var d_3 = new Audio(audio_folder+"D_3"+audio_ext);
var eb_3 = new Audio(audio_folder+"Eb_3"+audio_ext);
var e_3 = new Audio(audio_folder+"E_3"+audio_ext);

//Store notes
var notes = new Array();
notes.push(c_1);
notes.push(db_1);
notes.push(d_1);
notes.push(eb_1);
notes.push(e_1);
notes.push(f_1);
notes.push(gb_1);
notes.push(g_1);
notes.push(ab_1);
notes.push(a_1);
notes.push(bb_1);
notes.push(b_1);
notes.push(c_2);
notes.push(db_2);
notes.push(d_2);
notes.push(eb_2);
notes.push(e_2);
notes.push(f_2);
notes.push(gb_2);
notes.push(g_2);
notes.push(ab_2);
notes.push(a_2);
notes.push(bb_2);
notes.push(b_2);
notes.push(c_3);
notes.push(db_3);
notes.push(d_3);
notes.push(eb_3);
notes.push(e_3);
//total notes = 29


document.addEventListener('keypress',(event) =>{
  const keyName = event.keyCode;
 
 //get keybordbord key and activate the note
      if(keyName == "97"){
         notes[0].currentTime=note_duration;
         notes[0].play();
        //provide the touch feedback
        document.getElementById('c_1').focus();
        document.getElementById('c_1').onkeyup = function(){
            document.getElementById('c_1').blur();
        }
      }
       

      if(keyName == "115"){
         notes[2].currentTime=note_duration;
         notes[2].play();
         //provide the touch feedback
         document.getElementById('d_1').focus();
        document.getElementById('d_1').onkeyup = function(){
            document.getElementById('d_1').blur();
        }
      }

       if(keyName == "100"){
         notes[4].currentTime=note_duration;
         notes[4].play();
        //provide the touch feedback
        document.getElementById('e_1').focus();
        document.getElementById('e_1').onkeyup = function(){
            document.getElementById('e_1').blur();
        }
      }

       if(keyName == "102"){
         notes[5].currentTime=note_duration;
         notes[5].play();
     //provide the touch feedback
     document.getElementById('f_1').focus();
        document.getElementById('f_1').onkeyup = function(){
            document.getElementById('f_1').blur();
        }
      }

      if(keyName == "103"){
         notes[7].currentTime=note_duration;
         notes[7].play();
     //provide the touch feedback
     document.getElementById('g_1').focus();
        document.getElementById('g_1').onkeyup = function(){
            document.getElementById('g_1').blur();
        }
      }

      if(keyName == "104"){
         notes[9].currentTime=note_duration;
         notes[9].play();
     //provide the touch feedback
     document.getElementById('a_1').focus();
        document.getElementById('a_1').onkeyup = function(){
            document.getElementById('a_1').blur();
        }
      }

      if(keyName == "106"){
         notes[11].currentTime=note_duration;
         notes[11].play();
      //provide the touch feedback
      document.getElementById('b_1').focus();
        document.getElementById('b_1').onkeyup = function(){
            document.getElementById('b_1').blur();
        }
      }

      if(keyName == "107"){
         notes[12].currentTime=note_duration;
         notes[12].play();
     //provide the touch feedback
     document.getElementById('c_2').focus();
        document.getElementById('c_2').onkeyup = function(){
            document.getElementById('c_2').blur();
        }
      }

      if(keyName == "108"){
         notes[14].currentTime=note_duration;
         notes[14].play();
          //provide the touch feedback
          document.getElementById('d_2').focus();
        document.getElementById('d_2').onkeyup = function(){
            document.getElementById('d_2').blur();
        }
      }

  console.log("Key "+keyName+ " is pressed");

});

//this function plays a combination of notes
function payChord(chord_id){

    if(chord_id=="cmaj"){

        //set note duration
        notes[12].currentTime=note_duration;
        notes[4].currentTime=note_duration;
        notes[7].currentTime=note_duration;

        //Play a combination of notes
        notes[12].play();
        notes[4].play();
        notes[7].play();


    }else if(chord_id=="fmaj_7"){

        notes[5].currentTime=note_duration;
        notes[9].currentTime=note_duration;
        notes[0].currentTime=note_duration;
        notes[6].currentTime=note_duration;

        notes[0].play();
        notes[9].play();
        notes[0].play();
        notes[16].play();

    }else if(chord_id=="amin"){

        notes[9].currentTime=note_duration;
        notes[12].currentTime=note_duration;
        notes[4].currentTime=note_duration;

        notes[9].play();
        notes[12].play();
        notes[4].play();

    }else if(chord_id=="gmaj"){

        notes[7].currentTime=note_duration;
        notes[11].currentTime=note_duration;
        notes[2].currentTime=note_duration;
        notes[19].currentTime=note_duration;

        notes[7].play();
        notes[11].play();
        notes[2].play();
        notes[19].play();

    } else if(chord_id=="emin_7"){

        notes[7].currentTime=note_duration;
        notes[11].currentTime=note_duration;
        notes[14].currentTime=note_duration;
        notes[4].currentTime=note_duration;

        notes[7].play();
        notes[11].play();
        notes[14].play();
        notes[4].play();

    } else if(chord_id=="dmin"){

        notes[2].currentTime=note_duration;
        notes[5].currentTime=note_duration;
        notes[9].currentTime=note_duration;

        notes[2].play();
        notes[5].play();
        notes[9].play();

    }
}

//function plays a note when user click on it, recieves note id
function play(note_id){

    if(note_id=="c_1"){
        notes[0].currentTime=note_duration;
         notes[0].pause();
         notes[0].play();
    }

    if(note_id=="db_1"){
        notes[1].currentTime=note_duration;
        notes[1].pause();
         notes[1].play();
    }

     if(note_id=="d_1"){
        notes[2].currentTime=note_duration;
        notes[2].pause();
         notes[2].play();
    }

     if(note_id=="eb_1"){
        notes[3].currentTime=note_duration;
        notes[3].pause();
         notes[3].play();
    }

     if(note_id=="e_1"){
        notes[4].currentTime=note_duration;
        notes[4].pause();
         notes[4].play();
    }

     if(note_id=="f_1"){
        notes[5].currentTime=note_duration;
        notes[5].pause();
         notes[5].play();
    }
    if(note_id=="gb_1"){
        notes[6].currentTime=note_duration;
        notes[6].pause();
         notes[6].play();
    }
    if(note_id=="g_1"){
        notes[7].currentTime=note_duration;
        notes[7].pause();
        notes[7].play();
    }

    if(note_id=="ab_1"){
        notes[8].currentTime=note_duration;
        notes[8].pause();
         notes[8].play();
    }
    if(note_id=="a_1"){
        notes[9].currentTime=note_duration;
        notes[9].pause();
         notes[9].play();
    }
    if(note_id=="bb_1"){
        notes[10].currentTime=note_duration;
        notes[10].pause();
         notes[10].play();
    }
    if(note_id=="b_1"){
        notes[11].currentTime=note_duration;
        notes[11].pause();
         notes[11].play();
    }
    //sencond octave
    if(note_id=="c_2"){
        notes[12].currentTime=note_duration;
        notes[12].pause();
         notes[12].play();
    }

    if(note_id=="db_2"){
        notes[13].currentTime=note_duration;
        notes[13].pause();
         notes[13].play();
    }

     if(note_id=="d_2"){
        notes[14].currentTime=note_duration;
        notes[14].pause();
         notes[14].play();
    }

     if(note_id=="eb_2"){
        notes[15].currentTime=note_duration;
        notes[15].pause();
         notes[15].play();
    }

     if(note_id=="e_2"){
        notes[16].currentTime=note_duration;
        notes[16].pause();
        notes[16].play();
    }

     if(note_id=="f_2"){
        notes[17].currentTime=note_duration;
        notes[17].pause();
         notes[17].play();
    }
    if(note_id=="gb_2"){
        notes[18].currentTime=note_duration;
        notes[18].pause();
         notes[18].play();
    }
    if(note_id=="g_2"){
        notes[19].currentTime=note_duration;
        notes[19].pause();
         notes[19].play();
    }
    if(note_id=="ab_2"){
        notes[20].currentTime=note_duration;
        notes[20].pause();
         notes[20].play();
    }
    if(note_id=="a_2"){
        notes[21].currentTime=note_duration;
        notes[21].pause();
         notes[21].play();
    }
    if(note_id=="bb_2"){
        notes[22].currentTime=note_duration;
        notes[22].pause();
         notes[22].play();
    }
    if(note_id=="b_2"){
        notes[23].currentTime=note_duration;
        notes[23].pause();
         notes[23].play();
    }
    if(note_id=="c_3"){
        notes[24].currentTime=note_duration;
        notes[24].pause();
         notes[24].play();
    }

    if(note_id=="db_3"){
        notes[25].currentTime=note_duration;
        notes[25].pause();
         notes[25].play();
    }

     if(note_id=="d_3"){
        notes[26].currentTime=note_duration;
        notes[26].pause();
         notes[26].play();
    }

     if(note_id=="eb_3"){
        notes[27].currentTime=note_duration;
        notes[27].pause();
         notes[27].play();
    }

     if(note_id=="e_3"){
        notes[28].currentTime=alt_note_duration;
        notes[28].pause();
         notes[28].play();

     }

     //debug
    console.log(note_id+ " playing...");

}
