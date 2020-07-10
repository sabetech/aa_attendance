$(function() {
  $('input[name="attendance_date"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 2019,
    maxYear: parseInt(moment().format('YYYY'),10),
    "locale": {
      "format": "DD-MM-YYYY"
    }
  });
});
