var json = [ {
    "type": "custom:task",
    "id": "shape_609abdd3-ee01-f6b8-face-1e6bc23a2aad",
}, {
    "type": "custom:start",
    "id": "shape_0b76ef96-1972-550f-014e-c926178f4954",
},{
    "type": "custom:circulation",
    "id": "shape_3926efeb-7ba0-2972-50ce-2c6f80ddf8fb",
}, {
    "type": "custom:task",
    "id": "shape_018a44f8-ea50-716d-ff8f-3446e0eb1749",
}, {
    "type": "custom:task",
    "id": "shape_371b2442-ff44-3d47-a88e-7f03873f4c60",
}, {
    "type": "custom:judge",
    "id": "shape_c8999379-4377-494c-42b1-eddc171ea687",
}, {
    "type": "custom:task",
    "id": "shape_bd804d93-90d0-225b-48cf-a383efdc149a",
}, {
    "type": "custom:task",
    "id": "shape_99540e21-fe95-ba8f-5c33-b0d8b995e3f6",
}, {
    "type": "custom:judge",
    "id": "shape_8b99bfbc-3b4d-723b-3c2e-9db2788b38d2",
}, {
    "type": "custom:task",
    "id": "shape_71232022-b2a8-a7b7-93ba-86973a48292f",
}, {
    "type": "custom:end",
    "id": "shape_b5b3c78d-cc0d-af11-4162-77079df0846b",
}, {
    "type": "custom:connection",
    "id": "connection_5ac8b2a5-df94-0a22-00ec-6ee76643f6d3",
    "source": "shape_0b76ef96-1972-550f-014e-c926178f4954",
    "target": "shape_609abdd3-ee01-f6b8-face-1e6bc23a2aad",
}, {
    "type": "custom:connection",
    "id": "connection_b4d01a3e-8ae4-5113-6749-0ad9c96845c3",
    "source": "shape_609abdd3-ee01-f6b8-face-1e6bc23a2aad",
    "target": "shape_3926efeb-7ba0-2972-50ce-2c6f80ddf8fb",
}, {
    "type": "custom:connection",
    "id": "connection_11cdeb95-c199-d483-fa9d-10b4b06647f1",
    "source": "shape_3926efeb-7ba0-2972-50ce-2c6f80ddf8fb",
    "target": "shape_371b2442-ff44-3d47-a88e-7f03873f4c60",
}, {
    "type": "custom:connection",
    "id": "connection_58412505-5818-bd1e-63d8-1d2c776968ca",
    "source": "shape_3926efeb-7ba0-2972-50ce-2c6f80ddf8fb",
    "target": "shape_018a44f8-ea50-716d-ff8f-3446e0eb1749",
}, {
    "type": "custom:connection",
    "id": "connection_78b34fa4-9c48-1db1-f583-3d8749c17b43",
    "source": "shape_018a44f8-ea50-716d-ff8f-3446e0eb1749",
    "target": "shape_609abdd3-ee01-f6b8-face-1e6bc23a2aad",
}, {
    "type": "custom:connection",
    "id": "connection_97bec631-6097-1f22-8f3d-1ecf63cb7e1d",
    "source": "shape_371b2442-ff44-3d47-a88e-7f03873f4c60",
    "target": "shape_c8999379-4377-494c-42b1-eddc171ea687",
}, {
    "type": "custom:connection",
    "id": "connection_e63bf802-e0d0-efa5-f4f3-c3aadb1ee93a",
    "source": "shape_c8999379-4377-494c-42b1-eddc171ea687",
    "target": "shape_018a44f8-ea50-716d-ff8f-3446e0eb1749",
}, {
    "type": "custom:connection",
    "id": "connection_8d7b0720-1072-4b04-6f40-46fdf6e3f173",
    "source": "shape_c8999379-4377-494c-42b1-eddc171ea687",
    "target": "shape_bd804d93-90d0-225b-48cf-a383efdc149a",
}, {
    "type": "custom:connection",
    "id": "connection_ea037e6c-30d2-c9fe-d4c0-a6c65ccb9b24",
    "source": "shape_99540e21-fe95-ba8f-5c33-b0d8b995e3f6",
    "target": "shape_8b99bfbc-3b4d-723b-3c2e-9db2788b38d2",
}, {
    "type": "custom:connection",
    "id": "connection_5fc7aac2-cc84-e63a-11e3-c6bae7d83e43",
    "source": "shape_8b99bfbc-3b4d-723b-3c2e-9db2788b38d2",
    "target": "shape_99540e21-fe95-ba8f-5c33-b0d8b995e3f6",
}, {
    "type": "custom:connection",
    "id": "connection_f396afcd-585e-01af-c183-fdc0041c320f",
    "source": "shape_8b99bfbc-3b4d-723b-3c2e-9db2788b38d2",
    "target": "shape_71232022-b2a8-a7b7-93ba-86973a48292f",
}, {
    "type": "custom:connection",
    "id": "connection_931e976b-f457-d217-9e31-9ee101736ae2",
    "source": "shape_bd804d93-90d0-225b-48cf-a383efdc149a",
    "target": "shape_99540e21-fe95-ba8f-5c33-b0d8b995e3f6",
}, {
    "type": "custom:connection",
    "id": "connection_dc0d07d3-b32c-9f5d-44f7-2028374a90d3",
    "source": "shape_71232022-b2a8-a7b7-93ba-86973a48292f",
    "target": "shape_b5b3c78d-cc0d-af11-4162-77079df0846b",
}];
let f = 0;
let arr = Array();
let q = new Array(f);
for (let i = 0; i < json.length; i++) {
    if (json[i].type === "custom:start") {
        let tmp=json[0];
        json[0]=json[i];
        json[i]=tmp;
    }
    if (json[i].type === "custom:end") {
        let tmp=json[i];
        json[i]=json[json.length-1];
        json[json.length-1]=tmp;
    }
}
for (let i = 0; i < json.length; i++) {
    if (json[i].type !== "custom:connection") {
        arr[f] = json[i].id;
        q[f] = json[i];
        f++;
    }
}
console.log(arr);
let result = Array(f);
let vis = new Array(f);
let sum;

function dfs(pre) {
    result[sum]=pre;
    sum++;
    if (sum === f)
        return;

    for (let i = 0; i < f; i++) {
        if (vis[i] === 0 && tmp[pre][i] === 1) {
            vis[i] = 1;
            dfs(i);
        }
    }
    return;
}
for (let i = 0; i < f; i++) {
    vis[i] = 0;
}

let tmp = [];
for (let i = 0; i < f; i++) {
    tmp[i] = [];
    for (let j = 0; j < f; j++) {
        if (i == j) {
            tmp[i][j] = 0;
        } else {
            tmp[i][j] = 9999999;
        }
    }
}
let t = json.length - f;
while (t--) {
    for (let i = 0; i < json.length; i++) {
        if (json[i].type === "custom:connection") {
            tmp[arr.indexOf(json[i].source)][arr.indexOf(json[i].target)] = 1;
            tmp[arr.indexOf(json[i].target)][arr.indexOf(json[i].source)] = 1;
        }
    }
}
sum = 0;
vis[0] = 1;
dfs(0);

console.log(result);
let out=[];
for(let i=0;i<result.length;i++){
    out[i]=q[result[i]];
}
console.log(out);
