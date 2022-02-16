<template>
    <div>
       <iv-visualisation :title="pageName" :vue_config="vue_config" :page_number="2">
            
            <div style="width:30vw; float:left; margin-left:5vw;">
                <h3>2D</h3>
                <br><br>
                <img src="../assets/2D.png" style="width:25vw"><br>
                <iv-slider theme="Red" name="x-Position"></iv-slider>
                <iv-slider theme="Red" name="y-Position"></iv-slider>
                <br>

            </div>

            <div style="width:30vw; float:right; margin-right:5vw;">
                <h3>3D</h3>
                <img src="../assets/3D.png" style="width:25vw"><br>
                <iv-slider name="Object Size"></iv-slider>
                <br>

            </div>

            <template #hotspots>
                <iv-pane position="left">
                    <iv-sidebar-content>
                        <iv-sidebar-section title="Conceptual Understanding">
                            To better understand what a solid angle actually is, imagine being at the centre of a sphere and holding a torch. When you shine the torch at one of the sides of the sphere, you’ll see part of the area lighting up; this is your Field Of View (FOV). Now imagine there’s a star between you and the sphere, in the light of the torch. The star will block some light and take up a certain part of your FOV. This is the solid angle of the star from your perspective.

How much of your FOV that the star takes up depends on its size and its position relative to you. The larger the star and the closer it is, the greater its solid angle.

Depending on how the star is orientated, we may see a different shape from our perspective, and likewise it would leave a different shaped shadow on the sphere. This image of the star is always perpendicular to us, and this must be true in order to use the solid angle equation.

If we have a separation vector <iv-equation-box equation="\hat{r}" :stylise="false"></iv-equation-box> from the observer (us) to the centre of the star, the area element we consider must be perpendicular to <iv-equation-box equation="\hat{r}" :stylise="false"></iv-equation-box>. If it is not, we must project the area along <iv-equation-box equation="\hat{r}" :stylise="false"></iv-equation-box> to get the equivalent normal area,
	<iv-equation-box equation="dS = dA \cdot \hat{r}" :stylise="false"></iv-equation-box>

<img src="../assets/ProjectionSketch.png" style="width:10vw;">

                        </iv-sidebar-section>
                    </iv-sidebar-content>
                </iv-pane>
            </template>
        </iv-visualisation>
    </div>
</template>
<script>
import vue_config from '../../vue.config.js'
export default {
    name:"conceptual_understanding",
    data(){
        return {
            pageName:"Conceptual Understanding",
            vue_config
        }
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