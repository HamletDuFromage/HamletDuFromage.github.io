var profiles = [];

function download(file) {
    var obj = document.getElementById("json_output").value;
    obj = obj.replace(/\n/g, "%0D%0A");
    var data = "text/json;charset=utf-8," + obj;

    var a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = file;

    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

}

document.getElementById("dl").onclick = function () {
    download("jc_profiles.json");
};

document.getElementById("rm").onclick = function () {
    profiles.pop();
    document.getElementById("json_output").value = JSON.stringify(profiles, null, 4);
};

document.getElementById("gen").onclick = function () {
    var name = document.getElementById("profile_name").value;
    if (name === "") {
        name = "Custom Profile";
    }
    var profile = {
        "name": name,
        "L_JC": document.getElementById("ljc_color").value,
        "L_BTN": document.getElementById("dpad_color").value,
        "R_JC": document.getElementById("rjc_color").value,
        "R_BTN": document.getElementById("buttons_color").value
    }

    profiles.push(profile);
    document.getElementById("json_output").value = JSON.stringify(profiles, null, 4);

};