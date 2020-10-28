const debug =` <!DOCTYPE html>
<html>

<head>
    <title>INVOICE</title>
    <style>

    
    @page {
        size: A4;
    }

    @page :left {
        margin-left: 1cm;
    }

   

    @page :first {
        margin-top: 1cm;
    }

    @media only screen and (max-width: 500px){
        body {
            color: #2a2a2a;
            font-family: Helvetica, Arial, sans-serif;
            margin-top: 1em;
            box-sizing: border-box;
            font-size:16px;
            margin-left: 5%;
            margin-right:5%;
            border-collapse: collapse;
            table-layout: fixed;
            width:100%;
        
        }
    
            .flex-container {
           
                margin-left: 10%;
                margin-right: 5%;
                margin-top: 1em;
                display: flex;
                flex-direction: column;
                table-layout: fixed;
                width:100%;
            }

    }
    
    body {
        max-width: 800px;
        color: #2a2a2a;
        font-family: Helvetica, Arial, sans-serif;
        margin-top: 1em;
        box-sizing: border-box;
        font-size:16px;
        margin-left: 5%;
        margin-right:5%;
        border-collapse: collapse;
        table-layout: fixed;
        width:100%;
    
    }

        .flex-container {
            max-width: 800px;
            margin-left: 5%;
            margin-right: 5%;
            margin-top: 1em;
            display: flex;
            flex-direction: column;
            table-layout: fixed;
            width:100%;
        }

        .compantProfile {
            display: flex;
            flex-direction: column;
            justify-content: end;
         
        }

        h1 {
            font-size: 4em;
            margin: 0;
        }

        
        .clientDetail {
            flex: 50%;
        }

        .flex-box {
            padding: 0;
            margin: 0;
            list-style: none;
            display: flex;
        }

        .flex-start {
            justify-content: flex-start;
        }

        table.item,
        th.item,
        td.item {
            border: 1px solid black;
            border-collapse: collapse;
            margin: 25px 0 10px;
            text-align: center;
            table-layout: fixed;
            width:100%;
        }

        td:empty::after {
            content: "";
        }

        span {
            margin-left: 40%;
        }
    </style>
</head>

<body>
<div class="flex-container">
<div style=' display: table; width:100%; '>
    <h1 style='display: table-cell; vertical-align: top;'>INVOICE</h1>
    <div style="vertical-align: top; float: right; margin-left: 250px;">
        <p><b>Techbyte Team inc.</b></p>
        <p>techbyteteam@gmail.com</p>
        <p>4372377378</p>
        <p>567</p>
        <p>Ascot Ave</p>
    </div>
</div>
<div style="border-top: 5px solid gray;"></div>

<div  style='display: table;'>
    <div style='display: table-cell; vertical-align: top;text-align: left;'>
        <p> <b>Billing To:</b> </P>
        <p>kanchan</p>
        <p>trtry</p>
        <p>4356789</p>
        <p>rikhikanchan123@gmail.com</p>
    </div>
    <div style='display: table; float: right; margin-left: 360px;'>

<table>
<tr >
    <td>
        <p> <b>Issued Date: </b></p>
        <p> <b>Invoice No: </b> </p>
    </td>
    
    <td>
    <p>2020-10-28</p>
    <p>345678</p>
    </td>
</tr>
</table>
    </div>
</div>



        <table class="item" >
            <tr class="item" >
                <th class="item" >Discription</th>
                <th class="item" >Unit Cost</th>
                <th class="item" >Quantity</th>
                <th class="item" >Amount</th>
            </tr>
            
                <tr class="item" >
                <td class="item">test</td>
                <td class="item">$4</td>
                <td class="item" >4</td>
                <td class="item" >$16.00</td>
            </tr>
           
        </table>


        <div style="flex: 100%; margin-left: 50%;">
            <p>Subtotal:&nbsp;&nbsp;&nbsp;<span> $16.00</span> </p>
            <p>Tax Rate:&nbsp;&nbsp;&nbsp;<span>13%</span></p>
            <p>Tax Amount:<span style="margin-left: 38%; ">$2.08</span></p>
        </div>
        <div style="flex: 100%; margin-left: 42%;border-top: 5px solid gray;"></div>

        <table style=' margin-left:50%;'>
        <tr >
            <td>
            <p style="flex: 100%"><b>Total:</b><span style='margin-left:98%';><b>$18.08</b></span></p>
        
            </td>
        </tr>
    </table>

            
        <div style="flex: 100%; margin-left:42%;border-top: 5px solid gray;"></div>
        <div>
          <p style="margin-bottom: 30px; margin-top: 20px;  text-align: center; font-weight: 200;font-size: 17px;"><b>Thank you for your business!</b></p>
            <p style= "text-align: center;font-weight: 200;font-size: 17px; margin-left: 10px">if you have any questions or inquaries, please contect.</p>
            <p style="text-align: center;font-weight: 200;font-size: 17px;">Contect Name,4372377378, or techbyteteam@gmail.com</p>
        </div>
    </div>
</body>
</html>`
    
module.exports = debug;