const getPdfTemplates = (data) => {
    const { billingDetail: {
        clientName,
        streetAddress,
        phoneNumber,
        email,
        invoiceNumber,
    },
        items,
        profileDetail: {
            companyName,
            email: emailaddress,
            phoneNumber: mobileNumber,
            rtNumber: rtNumber,
            companyAddress,
        }
    } = data;
    const subTotal = items.reduce((accumulator, currentValue) => accumulator +
        currentValue.quantity * currentValue.unitCost, 0)
    const subtotal = subTotal.toFixed(2);
    const taxCal = +subTotal * 0.13;
    tax = +taxCal.toFixed(2)
    const taxFormated = tax;
    const total = +taxFormated + +subTotal;
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const currentDate = `${year}-${month}-${date}`
    // const clientId = Math.floor((Math.random() * 999999) + 1);
    return `
    <!DOCTYPE html>
    <html>

    <head>
        <title>INVOICE</title>
        <style>
        body {
            color: #2a2a2a;
            font-family: Helvetica, Arial, sans-serif;
            margin-top: 1em;
            box-sizing: border-box;    
            font-size:16px;
            margin-left: 5%;
            margin-right:5%;
            overflow: auto;
            width: auto;
       
        
        }
    
            .flex-container {
                display: flex;
                flex-direction: column;
                overflow: visible ;
               
            }
    
    
            h1 {
                font-size: 4em;
                margin: 0;
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
            <div style="vertical-align: top; float: right;">
                <p><b>${companyName}</b></p>
                <p>${emailaddress}</p>
                <p>${mobileNumber}</p>
                ${rtNumber ? `<p>${rtNumber}</p>` : ''}
                ${companyAddress ? `<p>${companyAddress}</p>` : ''}
            </div>
        </div>
        <div style="border-top: 5px solid gray;"></div>

        <div style='display: table;'>
            <div style='display: table-cell; vertical-align: top;text-align: left;'>
                <p> <b>Billing To:</b> </P>
                <p>${clientName}</p>
                ${streetAddress ? `<p>${streetAddress}</p>` : ''}
                <p>${phoneNumber}</p>
                <p>${email}</p>
            </div>
            <div style='display: table; float: right; margin-left: 360px;'>

        <table>
        <tr >
            <td>
                <p> <b>Issued Date: </b></p>
                <p> <b>Invoice No: </b> </p>
            </td>
            
            <td>
            <p>${currentDate}</p>
            ${invoiceNumber ? `<p>${invoiceNumber}</p>` : ''}
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
            ${items.map(({ discription, unitCost, quantity } = item) => {
        return `
                <tr class="item" >
                <td class="item">${discription}</td>
                <td class="item">$${unitCost}</td>
                <td class="item" >${quantity}</td>
                <td class="item" >$${(+quantity * +unitCost).toFixed(2)}</td>
            </tr>
           `
    })}
        </table>


        <div style="flex: 100%; margin-left: 50%;">
            <p>Subtotal:&nbsp;&nbsp;&nbsp;<span> $${subtotal}</span> </p>
            <p>Tax Rate:&nbsp;&nbsp;&nbsp;<span>13%</span></p>
            <p>Tax Amount:<span style="margin-left: 38%; ">$${taxFormated}</span></p>
        </div>
        <div style="flex: 100%; margin-left: 42%;border-top: 5px solid gray;"></div>

        <table style=' margin-left:50%;'>
        <tr >
            <td>
            <p style="flex: 100%"><b>Total:</b><span style='margin-left:98%;'><b>$${total.toFixed(2)}</b></span></p>
        
            </td>
        </tr>
    </table>

            
        <div style="flex: 100%; margin-left:42%;border-top: 5px solid gray;"></div>
        <div>
          <p style="margin-bottom: 30px; margin-top: 20px;  text-align: center; font-weight: 200;font-size: 17px;"><b>Thank you for your business!</b></p>
            <p style= "text-align: center;font-weight: 200;font-size: 17px; margin-left: 10px">if you have any questions or inquaries, please contect.</p>
            <p style="text-align: center;font-weight: 200;font-size: 17px;">Contect Name,${mobileNumber}, or ${emailaddress}</p>
        </div>
    </div>
</body>
</html>
    `
}
module.exports = getPdfTemplates;