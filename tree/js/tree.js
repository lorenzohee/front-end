/**
 * Created by Lorenzo on 2015/3/18.
 */

var currentLevel;
var nextDom;
$(function() {
    renderMainFrame(mockValue());
    // if the version of jquery is 1.7 or below, please use live, 1.7-1.9 is on, 1.9 and above is delegate.
    $(".treeMain").delegate('li', 'click', function() {
        getCurrentLevel(this);
        getSelectedValue(this);
        if($(this).hasClass("selected")) {
            $(this).removeClass("selected");
            if($(this).next().hasClass('childNode'))
                $(this).next().remove();
        }else if(currentLevel == 1) {
            $(this).siblings().removeClass("selected");
            $(".secondLevel").remove();
            var childNodeList = mockValue();
            if(childNodeList != null && childNodeList.length>0) {
                nextDom =renderSecondLevel(childNodeList);
                nextDom.addClass('childNode');
                $(this).after(nextDom);
            }
            $(this).addClass("selected");
        }else if(currentLevel == 2) {
            $(this).siblings().removeClass("selected");
            $(".thirdLevel").remove();
            var childNodeList = mockValue();
            if(childNodeList != null && childNodeList.length>0) {
                nextDom =renderThirdLevel(childNodeList);
                nextDom.addClass('childNode');
                $(this).after(nextDom);
            }
            $(this).addClass("selected");
        }else if(currentLevel == 3) {
            $(this).siblings().removeClass("selected");
            $(".fouthLevel").remove();
            var childNodeList = mockValue();
            if(childNodeList != null && childNodeList.length>0) {
                nextDom =renderFouthLevel(childNodeList);
                nextDom.addClass('childNode');
                $(this).after(nextDom);
            }
            $(this).addClass("selected");
        }else if(currentLevel == 4) {
            $(this).siblings().removeClass("selected");
            $(this).addClass("selected");
        }
    });

    var getCurrentLevel = function(that) {
        if($(that).parent().hasClass("firstLevel")) {
            currentLevel = 1;
        }else if($(that).parent().hasClass("secondLevel")) {
            currentLevel = 2;
        }else if($(that).parent().hasClass("thirdLevel")) {
            currentLevel = 3;
        }else if($(that).parent().hasClass("fouthLevel")) {
            currentLevel = 4;
        }
    }

    function renderMainFrame(data) {
        for(var i=0; i<data.length; i++) {
            $(".firstLevel").find('input').val(data[i]['zznm']);
            $(".firstLevel").find('span').text(data[i]['zzmc']);
        }
    }

    var renderSecondLevel = function(data) {
        var ul = $("<ul class='secondLevel'></ul>");
        for(var i=0; i<data.length; i++) {
            var li = "<li><img src='img/folder.png' style='float: left'><input type='hidden' value='"+data[i]["zznm"]+"'>"+data[i]["zzmc"]
                +"</li>";
            ul.append(li);
        }
        return ul;
    }

    var renderThirdLevel = function(data) {
        var ul = $("<ul class='thirdLevel'></ul>");
        for(var i=0; i<data.length; i++) {
            var li = "<li><input type='hidden' value='"+data[i]["zznm"]+"'>"+data[i]["zzmc"] +"</li>";
            ul.append(li);
        }
        return ul;
    }

    var renderFouthLevel = function(data) {
        var ul = $("<ul class='fouthLevel'></ul>");
        for(var i=0; i<data.length; i++) {
            var li = "<li><input type='hidden' value='"+data[i]["zznm"]+"'>"+data[i]["zzmc"] +"</li>";
            ul.append(li);
        }
        return ul;
    }

    var getSelectedValue = function(that) {
        var zznm = $(that).find('input').val();
        var zzmc = $(that).text();
        alert("zznm is : " + zznm + "; zzmc is : " + zzmc);
    }





    function mockValue() {
        return [{zznm:"0001",zzmc:"组织名称1"},{zznm:"0002", zzmc:"组织名称2"}];
    }
})