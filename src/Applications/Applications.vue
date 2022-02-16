<template>
    <div>
       <iv-visualisation :title="pageName" :vue_config="vue_config" :page_number="3">

            
            <div style="width:30vw; float:left; margin-left:5vw;" v-if="!showQ">
                <br><br>
                <img src="../assets/Page3Image1.png" style="width:25vw"><br>



            </div>

            <div style="width:30vw; float:right; margin-right:5vw;" v-if="!showQ">
                <img src="../assets/Integration.png" style="width:25vw"><br>


            </div>

            <div v-if="showQ" style="margin:100px">
                <h3>Problem (Solid Angles)</h3>
                <br>
                
                The Moon has a surface area of ∼ <iv-equation-box :stylise="false" equation="3.8 \times 10^7 \; km^2"></iv-equation-box> and has a mean orbital radius about the Earth of ∼ <iv-equation-box :stylise="false" equation="3.8 \times 10^5 \; km"></iv-equation-box>.
                <br>
                <br>
                (a) What is the solid angle subtended by the Moon in the sky? 
                <br>
                <br>
                <iv-dropdown-text-box buttonText="Show Answer" dropdownText="The solid angle, Ω = A/d2 , is the 2D angle subtended by a cross-sectional area A at a distance d from the point of observation. The problem gives the surface area of the moon, 4πr2 , where r is the radius of the moon. The cross-sectional area of the moon is then A = πr2 = (3.8/4) × 107 = 9.5 × 106 km2 . Thus, Ω = (9.5 × 106 )/(3.8 × 105 ) 2 = 6.6 × 10−5 sr (steradians).
"></iv-dropdown-text-box>
                <div style="background-color:lightgrey; padding:20px;">
                    The solid angle, 
                    <iv-equation-box :stylise="false" equation="\Omega = \frac{A}{d^2}"></iv-equation-box>
                    , is the 2D angle subtended by a cross-sectional area A at a distance d from the point of observation. The problem gives the surface area of the moon, 
                    <iv-equation-box :stylise="false" equation="4 \pi r^2"></iv-equation-box>
                     , where r is the radius of the moon. The cross-sectional area of the moon is then
                    <iv-equation-box :stylise="false" equation="A= \pi r^2 = \frac{3.8}{4} \times 107 = 9.5 \times 106 \; km^2"></iv-equation-box>
                      . Thus, 
                    <iv-equation-box :stylise="false" equation="\Omega = \frac{9.5 \times 106}{(3.8 \times 105)^2} = 6.6 \times 10^{-5} \; sr"></iv-equation-box>
                    (steradians).

                </div>
                <br>
                <br>
                (b) What fraction of the total sky does this solid angle represent?
                <br>
                <br>
                <iv-dropdown-text-box buttonText="Show Answer"></iv-dropdown-text-box>
                <br>
                <br>
                (c) Pluto has a mean diameter of 2,300 km and a very eccentric orbit around the sun, with a perihelion distance of <iv-equation-box :stylise="false" equation="4.4 \times 10^9 \; km"></iv-equation-box> and an aphelion distance of <iv-equation-box :stylise="false" equation="7.3 \times 10^9 \; km"></iv-equation-box>. What is the variation in the solid angle subtended by Pluto from Earth’s perspective during one of Pluto’s orbits around the sun? Assume that Earth’s distance from the sun can be neglected.
                <br>
                <br>
                <iv-dropdown-text-box buttonText="Show Answer"></iv-dropdown-text-box>
                <br>
                <br>
            </div>


            <template #hotspots>
                <iv-pane position="left">
                    <iv-sidebar-content>
                        <iv-sidebar-section title="Applications">
                           Solid angles can be very useful in integration to help simplify problems, however we need to know how to convert the integration between different parameters. Take a look at the image to the right.

For a surface element of a sphere with radius r, at angle 
    <iv-equation-box equation="\theta" :stylise="false"></iv-equation-box> from the vertical, we can show that,
    
    <iv-equation-box equation="dS = r^2 sin{\theta} d\theta d\phi." :stylise="false"></iv-equation-box><br>
	

The concept of solid angles can also be used to prove Gauss’ law. For the same solid angle, the flux from a point charge through any surface will be the same. 

Now use the toggle to see an example question and try to solve it! 

            <div @click="showQ = !showQ">
                <br>
                Toggle Question
                <iv-toggle-basic></iv-toggle-basic>
            </div>


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
    name:"applications",
    data(){
        return {
            pageName:"Applications",
            vue_config,
            showQ:false,
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