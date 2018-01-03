$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: resellers,
        keyExpr: "ID",
        rowAlternationEnabled: true,
        allowFiltering: true,
        showBorders: true,
        showRowLines: true,
        headerFilter: {
            visible: true
            
        },
        paging: {
            pageSize: 10
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20],
            showInfo: true
        },
        columns: [{
            dataField: "Prefix",
            caption: "Reseller",
            cssClass: "rowColor",
            width: 200
        },
            
            {
                dataField: "BundlePrice",
                caption: "100 Bundle SMS Price",
                cssClass: "rowColor",
                width: 250
            },
            {
                dataField: "UnitPrice",
                caption: "Unit Price",
                cssClass: "rowColor",
                width: 150
            },
            {
                dataField: "BillingAmount",
                caption: "Billing Amount",
                cssClass: "rowColor",
                width: 150
            }
        ],
        masterDetail: {
            enabled: true,
            template: function (container, options) {
                var resellersData = options.data;

                $("<div>")
                    .addClass("master-detail-caption")
                    .text(resellersData.FirstName)
                    .appendTo(container);

                $("<div>")
                    .dxDataGrid({
                        columnAutoWidth: true,
                        showBorders: true,
                        rowAlternationEnabled: true,
                        columns: [
                            {
                                dataField: "Device",
                                cssClass: 'cls'
                            },
                            {
                                dataField: "SMS Count DEC | JAN",
                                cssClass: 'cls'
                             },
                            {
                                dataField: "ActivationDate",
                                dataType: "date",
                                cssClass: 'cls'
                            },
                            {
                                dataField: "Status",
                                cssClass: 'cls'
                            }
                        ],
                        showRowLines: true,
                        onRowPrepared: function (e) {
                            
                            e.rowElement.css({ "background-color": "GhostWhite" });
                            
                        },
                        dataSource: resellersData.Tasks
                    }).appendTo(container);
            }
        }
    });
});