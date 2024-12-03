var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Google_1 = new ol.layer.Tile({
            'title': 'Google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_RedlinePlanningBoundary_2 = new ol.format.GeoJSON();
var features_RedlinePlanningBoundary_2 = format_RedlinePlanningBoundary_2.readFeatures(json_RedlinePlanningBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedlinePlanningBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedlinePlanningBoundary_2.addFeatures(features_RedlinePlanningBoundary_2);
var lyr_RedlinePlanningBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedlinePlanningBoundary_2, 
                style: style_RedlinePlanningBoundary_2,
                popuplayertitle: "Redline Planning Boundary",
                interactive: false,
                title: '<img src="styles/legend/RedlinePlanningBoundary_2.png" /> Redline Planning Boundary'
            });
var format_SiteNotices_3 = new ol.format.GeoJSON();
var features_SiteNotices_3 = format_SiteNotices_3.readFeatures(json_SiteNotices_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiteNotices_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiteNotices_3.addFeatures(features_SiteNotices_3);
var lyr_SiteNotices_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SiteNotices_3, 
                style: style_SiteNotices_3,
                popuplayertitle: "Site Notices",
                interactive: true,
                title: '<img src="styles/legend/SiteNotices_3.png" /> Site Notices'
            });
var group_DWGasSHP = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "DWG as SHP"});
var group_SiteDetails = new ol.layer.Group({
                                layers: [lyr_RedlinePlanningBoundary_2,lyr_SiteNotices_3,],
                                fold: "open",
                                title: "Site Details"});
var group_Natural = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Natural"});
var group_N4RealignmentEmergingPreferredRouteCorridor = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "N4 Realignment - Emerging Preferred Route Corridor"});
var group_Other = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Other"});
var group_PlanningConsentFolios = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Planning Consent Folios"});

lyr_GoogleSatellite_0.setVisible(true);lyr_Google_1.setVisible(true);lyr_RedlinePlanningBoundary_2.setVisible(true);lyr_SiteNotices_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Google_1,group_SiteDetails];
lyr_RedlinePlanningBoundary_2.set('fieldAliases', {'Name': 'Name', });
lyr_SiteNotices_3.set('fieldAliases', {'Site_Notic': 'Site_Notic', 'X': 'X', 'Y': 'Y', });
lyr_RedlinePlanningBoundary_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_SiteNotices_3.set('fieldImages', {'Site_Notic': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_RedlinePlanningBoundary_2.set('fieldLabels', {'Name': 'no label', });
lyr_SiteNotices_3.set('fieldLabels', {'Site_Notic': 'inline label - visible with data', 'X': 'no label', 'Y': 'no label', });
lyr_SiteNotices_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});