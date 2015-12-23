var sql = require('mssql');

var config = {
    user: 'BCTest',
    password: 'hjKNrQoD88',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'BlendCard',

    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}

var connection = new sql.Connection(config, function(err) {
    // ... error checks

    // Query

    var request = new sql.Request(connection); // or: var request = connection.request();
    request.query('select 1 as number', function(err, recordset) {
        // ... error checks
    });

    // Stored Procedure
/*
    var request = new sql.Request(connection);
    request.input('input_parameter', sql.Int, 10);
    request.output('output_parameter', sql.VarChar(50));
    request.execute('procedure_name', function(err, recordsets, returnValue) {
        // ... error checks

        console.dir(recordsets);
    });
    */
});

connection.on('error', function(err) {
	// ... error handler
  console.dir('error occured ' + err);
});
