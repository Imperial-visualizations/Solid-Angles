<template>
    <div>
        <iv-visualisation :title="pageName" :vue_config="vue_config" :page_number="1">
            
            <div style="width:30vw; float:left; margin-left:5vw;">
                <br><br>
                <img src="../assets/Graph1.png" style="width:25vw"><br>
                <iv-slider theme="Yellow" name="Arc Length"></iv-slider>
                <iv-slider theme="Lime" name="Radius"></iv-slider>
                <br>

                <iv-equation-box equation="\Theta = \frac{\textcolor{orange}{A}}{\textcolor{green}{r}} = \frac{\textcolor{orange}{1.3}}{\textcolor{green}{3}} = 2.1"></iv-equation-box>

            </div>

            <div style="width:30vw; float:right; margin-right:5vw;">
                
                <div id="graph" stlye="height:80vh; background-color:blue;"></div>
                <iv-slider theme="Yellow" name="Area"></iv-slider>
                <iv-slider theme="Lime" name="Radius"></iv-slider>
                <br>

                <iv-equation-box equation="\Omega = \frac{\textcolor{orange}{A}}{\textcolor{green}{r^2}} = \frac{\textcolor{orange}{1.3}}{\textcolor{green}{3}} = 2.1"></iv-equation-box>
            </div>

            <template #hotspots>
                <iv-pane position="left">
                    <iv-sidebar-content>
                        <iv-sidebar-section title="What are Solid Angles?">A solid angle is a measure of the field of view that a given object covers as seen from a particular point, expressed in units of steradians.

Think of a normal 2D angle. It’s the angle <iv-equation-box equation="\theta" :stylise=false></iv-equation-box> between two radii r, and some arc length a in between. We can then relate these with the equation for arc length, which gives <iv-equation-box equation="\theta" :stylise=false></iv-equation-box> as the ratio of arc length to radius,
<iv-equation-box equation="\theta = \frac{a}{r}" :stylise=false></iv-equation-box> (radians).

Now we add an extra dimension to make things 3D. A solid angle <iv-equation-box equation="\Omega" :stylise=false></iv-equation-box> is the 3D angle (like a cone) with radius r, covering some surface area A. This surface area must be perpendicular to the centre of the sphere. We can relate these variables in a very similar equation to the one for arc length, giving <iv-equation-box equation="\Omega" :stylise=false></iv-equation-box> as the ratio of surface area to radius squared,
	<iv-equation-box equation="\Omega = \frac{A}{r^2}" :stylise=false></iv-equation-box> (steradians).

By going from 2D to 3D, we have gone from,
    <iv-equation-box equation="\theta → \Omega" :stylise=false></iv-equation-box><br>
    <iv-equation-box equation="a → A" :stylise=false></iv-equation-box><br>
    <iv-equation-box equation="r → r^2" :stylise=false></iv-equation-box><br>

Notice that we’ve gone from arc length in m, to area in <iv-equation-box equation="m^2" :stylise=false></iv-equation-box>. Because the angle is technically dimensionless, we need to divide by <iv-equation-box equation="m^2" :stylise=false></iv-equation-box> as well, hence we use <iv-equation-box equation="r^2" :stylise=false></iv-equation-box>.

Play around with the sliders below the diagrams to see how <iv-equation-box equation="\theta" :stylise=false></iv-equation-box>  and  <iv-equation-box equation="\Omega" :stylise=false></iv-equation-box> vary when we change arc length/area or radius. What do <iv-equation-box equation="\theta" :stylise=false></iv-equation-box> and <iv-equation-box equation="\Omega" :stylise=false></iv-equation-box> vary between? Why does <iv-equation-box equation="\Omega" :stylise=false></iv-equation-box> vary like this? (Hint: think of the equation for the surface area of a sphere)
</iv-sidebar-section>
                    </iv-sidebar-content>
                </iv-pane>
            </template>
        </iv-visualisation>
    </div>
</template>
<script>
import vue_config from '../../vue.config.js'
import Plotly from 'plotly.js/dist/plotly.min.js'; // eslint-disable-line no-unused-vars

export default {
    name:"intoduction",
    data(){
        return {
            pageName:"Introduction",
            vue_config
        }
    },
    mounted(){
        let vm = this; // eslint-disable-line no-unused-vars
        let config = {responsive: true};

        let angleStep = 1;
        let xVals = [];
        let yVals = [];
        let zVals = [];

        for(let phi = 30; phi <= 60; phi += angleStep){ 
            for(let theta = 0; theta <= 60; theta += angleStep){
            
                xVals.push(Math.sin(phi*Math.PI/180)*Math.cos(theta*Math.PI/180));
                yVals.push(Math.sin(phi*Math.PI/180)*Math.sin(theta*Math.PI/180));
                zVals.push(Math.cos(phi*Math.PI/180));
            }
        }


        let lines = { // eslint-disable-line no-unused-vars
            x: [0,0.5,0, 0.25,0, 0.433,0, 0.866],
            y: [0,0,0, 0.433,0, 0.75,0, 0],
            z: [0,0.866,0, 0.866,0, 0.5,0, 0.5],
            type: 'scatter3d',
            mode: 'lines',
            line:{
                color: 'rgb(0,150,0)',
            },
            title: "radius"
        } 

        let data2 = { // eslint-disable-line no-unused-vars
                x: xVals,
                y: yVals,
                z: zVals,
                
                opacity:0.7,
                color: 'rgb(200,200,0)',
                type:'mesh3d',
                title: 'Area'
            };

        // Plotly.newPlot('graph', [data], config);

        let a = [];
        let b = [];
        let c = [];

        let phiArr = [];
        let thetaArr = [];
        function makeInterval(startValue, stopValue, numPoints) {
            var arr = [];
            var step = (stopValue - startValue) / (numPoints - 1);
            for (let i = 0; i < numPoints; i++) {
            arr.push(startValue + (step * i));
            }
            return arr;
        }

        ////////////////
        // EDIT 1: calculate only upper half of the sphere

        phiArr = makeInterval(0, Math.PI/2, 20);  
        ///////////////
        thetaArr = makeInterval(0, 2*Math.PI, 20); 

        for (let i=0; i<thetaArr.length; i++){
            for (let j=0; j<phiArr.length; j++){
                a.push(Math.cos(thetaArr[i]) * Math.sin(phiArr[j]));
                b.push(Math.sin(thetaArr[i]) * Math.sin(phiArr[j]));   
                c.push(Math.cos(phiArr[j]));
            }
        }

        let dataitem = { // eslint-disable-line no-unused-vars
            opacity: 0.3,
            color: 'rgb(211,211,211)',
            type: 'mesh3d',
            x: a,
            y: b,
            z: c,
        }

        //////////////////////
        // EDIT 2: obtain the second half of the sphere by duplicating 
        // the upper semisphere ("..." operator before "dataitem") and 
        // changing its "z" attribute into negative vales:

        var data = [
            lines,
            data2,
            dataitem,
            {...dataitem, z: c.map(v => -v)}
        ];
        //////////////////////

        var layout = {
            autosize: false,
            width: 600,
            height: 600,
            margin: {
                l: 65,
                r: 50,
                b: 65,
                t: 90,
            }
        };

        
        Plotly.newPlot('graph', data, layout, config);
    }
}
</script>
<style>
.iv-welcome-message{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}
</style>