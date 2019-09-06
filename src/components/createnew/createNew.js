import React from "react";
import { Link } from "react-router-dom";
import "./createnew.css";

class CreateNew extends React.Component {
  render() {
    return (
      <div className="createnewcontainer">
        <div className="createcontainer">
          <h1>Create New Work Order</h1>
          <select  className = "createnewselect" value = {this.props.unitNumber} onChange = {this.props.handleChange} name = "unitNumber">

            <option value="">Select Unit Number</option>

            <option value="12">12</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="36">36</option>
            <option value="38">38</option>
            <option value="40">40</option>
            <option value="42">42</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="57">57</option>
            <option value="59">59</option>
            <option value="61">61</option>
            <option value="63">63</option>
            <option value="65">65</option>
            <option value="67">67</option>
            <option value="69">69</option>
            <option value="71">71</option>
            <option value="73">73</option>
            <option value="75">75</option>
            <option value="77">77</option>
            <option value="79">79</option>
            <option value="81">81</option>
            <option value="83">83</option>
            <option value="85">85</option>
            <option value="87">87</option>
            <option value="89">89</option>
            <option value="91">91</option>

            <option value="191">191</option>
            <option value="193">193</option>
            <option value="195">195</option>
            <option value="197">197</option>

            <option value="452">452</option>
            <option value="454">454</option>
            <option value="456">456</option>
            <option value="458">458</option>
            <option value="460">460</option>
            <option value="462">462</option>
            <option value="464">464</option>
            <option value="466">466</option>
            <option value="468">468</option>
            <option value="470">470</option>
            <option value="472">472</option>
            <option value="474">474</option>
            <option value="476">476</option>
            <option value="478">478</option>
            <option value="480">480</option>
            <option value="482">482</option>

            <option value="602">602</option>
            <option value="604">604</option>
            <option value="606">606</option>
            <option value="608">608</option>
            <option value="610">610</option>
            <option value="612">612</option>
            <option value="614">614</option>
            <option value="616">616</option>
            <option value="618">618</option>
            <option value="620">620</option>
            <option value="622">622</option>
            <option value="624">624</option>
            <option value="650">650</option>
            <option value="652">652</option>
            <option value="654">654</option>
            <option value="656">656</option>
            <option value="658">658</option>
            <option value="660">660</option>
            <option value="662">662</option>
            <option value="664">664</option>
            <option value="666">666</option>
            <option value="668">668</option>
            <option value="670">670</option>
            <option value="672">672</option>
            <option value="674">674</option>
            <option value="676">676</option>
            <option value="678">678</option>
            <option value="680">680</option>
            <option value="682">682</option>
            <option value="684">684</option>
            <option value="686">686</option>
            <option value="688">688</option>
            <option value="690">690</option>
            <option value="692">692</option>
            <option value="694">694</option>
            <option value="696">696</option>

            <option value="822">822</option>
            <option value="824">824</option>
            <option value="826">826</option>
            <option value="828">828</option>
           

            <option value="60-A">60-A</option>
            <option value="60-B">60-B</option>
            <option value="60-C">60-C</option>
            <option value="60-D">60-D</option>
            <option value="60-E">60-E</option>
            <option value="60-F">60-F</option>
            <option value="60-G">60-G</option>
            <option value="60-H">60-H</option>
            <option value="60-I">60-I</option>
            <option value="60-J">60-J</option>
            <option value="60-K">60-K</option>
            <option value="60-L">60-L</option>
            <option value="60-M">60-M</option>
            <option value="60-N">60-N</option>
            <option value="60-O">60-O</option>
            <option value="60-P">60-P</option>

            <option value="74-A">74-A</option>
            <option value="74-B">74-B</option>
            <option value="74-C">74-C</option>
            <option value="74-D">74-D</option>
            <option value="74-E">74-E</option>
            <option value="74-F">74-F</option>
            <option value="74-G">74-G</option>
            <option value="74-H">74-H</option>
            <option value="74-I">74-I</option>
            <option value="74-J">74-J</option>
            <option value="74-K">74-K</option>
            <option value="74-L">74-L</option>
            <option value="74-M">74-M</option>
            <option value="74-N">74-N</option>
            <option value="74-O">74-O</option>
            <option value="74-P">74-P</option>

            <option value="90-A">90-A</option>
            <option value="90-B">90-B</option>
            <option value="90-C">90-C</option>
            <option value="90-D">90-D</option>
            <option value="90-E">90-E</option>
            <option value="90-F">90-F</option>
            <option value="90-G">90-G</option>
            <option value="90-H">90-H</option>
            <option value="90-I">90-I</option>
            <option value="90-J">90-J</option>
            <option value="90-K">90-K</option>
            <option value="90-L">90-L</option>
            <option value="90-M">90-M</option>
            <option value="90-N">90-N</option>
            <option value="90-O">90-O</option>
            <option value="90-P">90-P</option>
           
       
            <option value="101-A">101-A</option>
            <option value="101-B">101-B</option>
            <option value="101-C">101-C</option>
            <option value="101-D">101-D</option>
            <option value="101-E">101-E</option>
            <option value="101-F">101-F</option>
            <option value="101-G">101-G</option>
            <option value="101-H">101-H</option>
            <option value="101-I">101-I</option>
            <option value="101-J">101-J</option>
            <option value="101-K">101-K</option>
            <option value="101-L">101-L</option>
            <option value="101-M">101-M</option>
            <option value="101-N">101-N</option>
            <option value="101-O">101-O</option>
            <option value="101-P">101-P</option>

            <option value="111-A">111-A</option>
            <option value="111-B">111-B</option>
            <option value="111-C">111-C</option>
            <option value="111-D">111-D</option>
            <option value="111-E">111-E</option>
            <option value="111-F">111-F</option>
            <option value="111-G">111-G</option>
            <option value="111-H">111-H</option>
            <option value="111-I">111-I</option>
            <option value="111-J">111-J</option>
            <option value="111-K">111-K</option>
            <option value="111-L">111-L</option>
            <option value="111-M">111-M</option>
            <option value="111-N">111-N</option>
            <option value="111-O">111-O</option>
            <option value="111-P">111-P</option>
         
           



          </select>
          <input
           autoComplete="off"
            className="createnewinput"
            placeholder="Tenant Name"
            name="tenantName"
            type="text"
            value={this.props.tenantName}
            onChange={this.props.handleChange}
          />
          <input
           autoComplete="off"
            className="createnewinput"
            placeholder="Description of problem needing repair"
            name="issue"
            type="text"
            value={this.props.issue}
            onChange={this.props.handleChange}
          />
          <div className="createnewbuttoncontainer">
            <Link to="/managementportal/work_orders">
              <button className="createnewbutton" onClick={this.props.handleSubmit}>
                Submit
              </button>
            </Link>
            <Link to="/managementportal/work_orders">
              <button className="createnewbutton">
                Cancel
              </button>
            </Link>
          </div>
          <p className="disclaimer">
            Notice: Submitting this work order is deemed an authorization to
            enter your apartment and review and potentially repair the problem
            reported. Upon receipt of this request, an employee of Legacy
            Apartments has authority to enter your residence to review and
            potentially repair the problem.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default CreateNew;
