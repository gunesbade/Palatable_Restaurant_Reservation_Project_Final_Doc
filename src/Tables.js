import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Tables() {
  return (
    <div>
    

<section>
<div class="floor">
    <div class="table-container">
        <div class="table-row">
            <div class="table table-square">
                <span class="table-label">Table 1</span>
            </div>
            <div class="table table-square">
                <span class="table-label">Table 2</span>
            </div>
            <div class="table table-square">
                <span class="table-label">Table 3</span>
            </div>
            <div class="table table-circle">
                <span class="table-label">Table 4</span>
            </div>
        </div>
        <div class="table-row">
            <div class="table table-circle">
                <span class="table-label">Table 5</span>
            </div>
            <div class="table table-square">
                <span class="table-label">Table 6</span>
            </div>
            <div class="table table-square">
                <span class="table-label">Table 7</span>
            </div>
            <div class="table table-square">
                <span class="table-label">Table 8</span>
            </div>
        </div>
        <div class="table-row">
            <div class="table table-square">
                <span class="table-label">Table 9</span>
            </div>
            <div class="table table-square">
                <span class="table-label">Table 10</span>
            </div>
            <div class="table table-square">
                <span class="table-label">Table 11</span>
            </div>
            <div class="table table-circle">
                <span class="table-label">Table 12</span>
            </div>
        </div>
    </div>


    <form>
    <button class="btn" type="submit"><li><Link to="/confirmation">Continue</Link></li></button>
    </form>
</div>

<textarea class="blue-textarea">- landscape -</textarea>
<textarea class="black-textarea">- bar -</textarea>
</section>

</div>


  )
}

export default Tables;