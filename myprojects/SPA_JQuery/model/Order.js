function OrderDTO(orderId,cusId,cost,date) {
    var _oderId = orderId;
    var _cusId = cusId;
    var _cost = cost;
    var _date = date;

    this.setOrderId = function (orderId) {
        _oderId =orderId;
    }
    this.setCusId = function (cusId) {
        _cusId = cusId;
    }
    this.setCost = function (cost) {
        _cost = cost;
    }
    this.setDate = function (date) {
        _date = date;
    }
    this.getOrderId = function () {
        return _oderId;
    }
    this.getCusId = function () {
        return _cusId;
    }
    this.getCost =  function () {
        return _cost;
    }
    this.getDate = function () {
        return _date;
    }
}