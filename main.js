
mustacheX = 0; 
mustacheY = 0;
lipsX = 0;
lipsY = 0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
    lips =  loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
    }
    
    function setup(){
        canvas = createCanvas(300,300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(300,140),
        video.hide();
        poseNet  = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose',gotPoses);
    }
    function modelLoaded(){
        console.log('PoseNet Is Initialized');
    }
    function gotPoses(results){
        if(results.length>0){
        console.log(results);
        mustacheX = results[0].pose.nose.x;
       mustacheY = results[0].pose.nose.y;
       lipsX = results[0].pose.lips.x;
       lipsY = results[0].pose.lips.y;
 
        }
    }
    
    function draw(){
        image(video, 0, 0, 300, 300);
        image(mustache, mustacheX,mustacheY, 30,30);
        image(lips, lipsX,lipsY, 30,30);
       // poseNet.on('pose',gotPoses);
      // fill(255,0,0);
       //stroke(255,0,0);
        //circle(noseX,noseY,20);
    
    }
    
    function take_snapshot(){
        save('myFilterImage.png');
    }