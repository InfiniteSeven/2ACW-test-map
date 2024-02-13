var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_ne_10m_admin_2_counties_2 = new ol.format.GeoJSON();
var features_ne_10m_admin_2_counties_2 = format_ne_10m_admin_2_counties_2.readFeatures(json_ne_10m_admin_2_counties_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_admin_2_counties_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_admin_2_counties_2.addFeatures(features_ne_10m_admin_2_counties_2);
var lyr_ne_10m_admin_2_counties_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_admin_2_counties_2, 
                style: style_ne_10m_admin_2_counties_2,
                popuplayertitle: "ne_10m_admin_2_counties",
                interactive: true,
    title: 'ne_10m_admin_2_counties<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_0.png" /> AK<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_1.png" /> AL<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_2.png" /> AR<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_3.png" /> AZ<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_4.png" /> CA<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_5.png" /> CO<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_6.png" /> CT<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_7.png" /> DC<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_8.png" /> DE<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_9.png" /> FL<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_10.png" /> GA<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_11.png" /> HI<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_12.png" /> IA<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_13.png" /> ID<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_14.png" /> IL<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_15.png" /> IN<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_16.png" /> KS<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_17.png" /> KY<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_18.png" /> LA<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_19.png" /> MA<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_20.png" /> MD<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_21.png" /> ME<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_22.png" /> MI<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_23.png" /> MN<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_24.png" /> MO<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_25.png" /> MS<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_26.png" /> MT<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_27.png" /> NC<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_28.png" /> ND<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_29.png" /> NE<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_30.png" /> NH<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_31.png" /> NJ<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_32.png" /> NM<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_33.png" /> NV<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_34.png" /> NY<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_35.png" /> OH<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_36.png" /> OK<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_37.png" /> OR<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_38.png" /> PA<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_39.png" /> PR<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_40.png" /> RI<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_41.png" /> SC<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_42.png" /> SD<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_43.png" /> TN<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_44.png" /> TX<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_45.png" /> UT<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_46.png" /> VA<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_47.png" /> VI<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_48.png" /> VT<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_49.png" /> WA<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_50.png" /> WI<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_51.png" /> WV<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_52.png" /> WY<br />\
    <img src="styles/legend/ne_10m_admin_2_counties_2_53.png" /> <br />'
        });
var format_tl_2022_us_primaryroads_3 = new ol.format.GeoJSON();
var features_tl_2022_us_primaryroads_3 = format_tl_2022_us_primaryroads_3.readFeatures(json_tl_2022_us_primaryroads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tl_2022_us_primaryroads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tl_2022_us_primaryroads_3.addFeatures(features_tl_2022_us_primaryroads_3);
var lyr_tl_2022_us_primaryroads_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tl_2022_us_primaryroads_3, 
                style: style_tl_2022_us_primaryroads_3,
                popuplayertitle: "tl_2022_us_primaryroads",
                interactive: true,
                title: '<img src="styles/legend/tl_2022_us_primaryroads_3.png" /> tl_2022_us_primaryroads'
            });
var format_ne_10m_admin_1_states_provinces_4 = new ol.format.GeoJSON();
var features_ne_10m_admin_1_states_provinces_4 = format_ne_10m_admin_1_states_provinces_4.readFeatures(json_ne_10m_admin_1_states_provinces_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_admin_1_states_provinces_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_admin_1_states_provinces_4.addFeatures(features_ne_10m_admin_1_states_provinces_4);
var lyr_ne_10m_admin_1_states_provinces_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_admin_1_states_provinces_4, 
                style: style_ne_10m_admin_1_states_provinces_4,
                popuplayertitle: "ne_10m_admin_1_states_provinces",
                interactive: true,
                title: '<img src="styles/legend/ne_10m_admin_1_states_provinces_4.png" /> ne_10m_admin_1_states_provinces'
            });
var format_tl_2022_us_mil_5 = new ol.format.GeoJSON();
var features_tl_2022_us_mil_5 = format_tl_2022_us_mil_5.readFeatures(json_tl_2022_us_mil_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tl_2022_us_mil_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tl_2022_us_mil_5.addFeatures(features_tl_2022_us_mil_5);
var lyr_tl_2022_us_mil_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tl_2022_us_mil_5, 
                style: style_tl_2022_us_mil_5,
                popuplayertitle: "tl_2022_us_mil",
                interactive: true,
                title: '<img src="styles/legend/tl_2022_us_mil_5.png" /> tl_2022_us_mil'
            });
var format_ne_10m_airports_6 = new ol.format.GeoJSON();
var features_ne_10m_airports_6 = format_ne_10m_airports_6.readFeatures(json_ne_10m_airports_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airports_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airports_6.addFeatures(features_ne_10m_airports_6);
var lyr_ne_10m_airports_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_airports_6, 
                style: style_ne_10m_airports_6,
                popuplayertitle: "ne_10m_airports",
                interactive: true,
                title: '<img src="styles/legend/ne_10m_airports_6.png" /> ne_10m_airports'
            });
var format_Grid_7 = new ol.format.GeoJSON();
var features_Grid_7 = format_Grid_7.readFeatures(json_Grid_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grid_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid_7.addFeatures(features_Grid_7);
var lyr_Grid_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Grid_7, 
                style: style_Grid_7,
                popuplayertitle: "Grid",
                interactive: true,
                title: '<img src="styles/legend/Grid_7.png" /> Grid'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(true);lyr_ne_10m_admin_2_counties_2.setVisible(true);lyr_tl_2022_us_primaryroads_3.setVisible(true);lyr_ne_10m_admin_1_states_provinces_4.setVisible(true);lyr_tl_2022_us_mil_5.setVisible(true);lyr_ne_10m_airports_6.setVisible(true);lyr_Grid_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,lyr_ne_10m_admin_2_counties_2,lyr_tl_2022_us_primaryroads_3,lyr_ne_10m_admin_1_states_provinces_4,lyr_tl_2022_us_mil_5,lyr_ne_10m_airports_6,lyr_Grid_7];
lyr_ne_10m_admin_2_counties_2.set('fieldAliases', {'FEATURECLA': 'FEATURECLA', 'SCALERANK': 'SCALERANK', 'ADM2_CODE': 'ADM2_CODE', 'ISO_3166_2': 'ISO_3166_2', 'ISO_A2': 'ISO_A2', 'ADM0_SR': 'ADM0_SR', 'NAME': 'NAME', 'NAME_ALT': 'NAME_ALT', 'NAME_LOCAL': 'NAME_LOCAL', 'TYPE': 'TYPE', 'TYPE_EN': 'TYPE_EN', 'CODE_LOCAL': 'CODE_LOCAL', 'REGION': 'REGION', 'REGION_COD': 'REGION_COD', 'ABBREV': 'ABBREV', 'AREA_SQKM': 'AREA_SQKM', 'SAMEASCITY': 'SAMEASCITY', 'LABELRANK': 'LABELRANK', 'NAME_LEN': 'NAME_LEN', 'MAPCOLOR9': 'MAPCOLOR9', 'MAPCOLOR13': 'MAPCOLOR13', 'FIPS': 'FIPS', 'SOV_A3': 'SOV_A3', 'ADM0_A3': 'ADM0_A3', 'ADM0_LABEL': 'ADM0_LABEL', 'ADMIN': 'ADMIN', 'GEONUNIT': 'GEONUNIT', 'GU_A3': 'GU_A3', 'MIN_LABEL': 'MIN_LABEL', 'MAX_LABEL': 'MAX_LABEL', 'MIN_ZOOM': 'MIN_ZOOM', 'WIKIDATAID': 'WIKIDATAID', 'NE_ID': 'NE_ID', 'latitude': 'latitude', 'longitude': 'longitude', 'NAME_AR': 'NAME_AR', 'NAME_BN': 'NAME_BN', 'NAME_DE': 'NAME_DE', 'NAME_EL': 'NAME_EL', 'NAME_EN': 'NAME_EN', 'NAME_ES': 'NAME_ES', 'NAME_FA': 'NAME_FA', 'NAME_FR': 'NAME_FR', 'NAME_HE': 'NAME_HE', 'NAME_HI': 'NAME_HI', 'NAME_HU': 'NAME_HU', 'NAME_ID': 'NAME_ID', 'NAME_IT': 'NAME_IT', 'NAME_JA': 'NAME_JA', 'NAME_KO': 'NAME_KO', 'NAME_NL': 'NAME_NL', 'NAME_PL': 'NAME_PL', 'NAME_PT': 'NAME_PT', 'NAME_RU': 'NAME_RU', 'NAME_SV': 'NAME_SV', 'NAME_TR': 'NAME_TR', 'NAME_UK': 'NAME_UK', 'NAME_UR': 'NAME_UR', 'NAME_VI': 'NAME_VI', 'NAME_ZH': 'NAME_ZH', 'NAME_ZHT': 'NAME_ZHT', 'loyalty': 'loyalty', });
lyr_tl_2022_us_primaryroads_3.set('fieldAliases', {'LINEARID': 'LINEARID', 'FULLNAME': 'FULLNAME', 'RTTYP': 'RTTYP', 'MTFCC': 'MTFCC', });
lyr_ne_10m_admin_1_states_provinces_4.set('fieldAliases', {'featurecla': 'featurecla', 'name': 'name', 'woe_label': 'woe_label', 'woe_name': 'woe_name', 'region_sub': 'region_sub', 'min_label': 'min_label', 'max_label': 'max_label', 'min_zoom': 'min_zoom', 'name_en': 'name_en', 'name_ru': 'name_ru', 'ne_id': 'ne_id', });
lyr_tl_2022_us_mil_5.set('fieldAliases', {'ANSICODE': 'ANSICODE', 'AREAID': 'AREAID', 'FULLNAME': 'FULLNAME', 'MTFCC': 'MTFCC', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_ne_10m_airports_6.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'comments': 'comments', 'wikidataid': 'wikidataid', 'name_ar': 'name_ar', 'name_bn': 'name_bn', 'name_de': 'name_de', 'name_en': 'name_en', 'name_es': 'name_es', 'name_fr': 'name_fr', 'name_el': 'name_el', 'name_hi': 'name_hi', 'name_hu': 'name_hu', 'name_id': 'name_id', 'name_it': 'name_it', 'name_ja': 'name_ja', 'name_ko': 'name_ko', 'name_nl': 'name_nl', 'name_pl': 'name_pl', 'name_pt': 'name_pt', 'name_ru': 'name_ru', 'name_sv': 'name_sv', 'name_tr': 'name_tr', 'name_vi': 'name_vi', 'name_zh': 'name_zh', 'wdid_score': 'wdid_score', 'ne_id': 'ne_id', 'name_fa': 'name_fa', 'name_he': 'name_he', 'name_uk': 'name_uk', 'name_ur': 'name_ur', 'name_zht': 'name_zht', });
lyr_Grid_7.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', });
lyr_ne_10m_admin_2_counties_2.set('fieldImages', {'FEATURECLA': 'TextEdit', 'SCALERANK': 'Range', 'ADM2_CODE': 'TextEdit', 'ISO_3166_2': 'TextEdit', 'ISO_A2': 'TextEdit', 'ADM0_SR': 'Range', 'NAME': 'TextEdit', 'NAME_ALT': 'TextEdit', 'NAME_LOCAL': 'TextEdit', 'TYPE': 'TextEdit', 'TYPE_EN': 'TextEdit', 'CODE_LOCAL': 'TextEdit', 'REGION': 'TextEdit', 'REGION_COD': 'TextEdit', 'ABBREV': 'TextEdit', 'AREA_SQKM': 'Range', 'SAMEASCITY': 'Range', 'LABELRANK': 'Range', 'NAME_LEN': 'Range', 'MAPCOLOR9': 'Range', 'MAPCOLOR13': 'Range', 'FIPS': 'TextEdit', 'SOV_A3': 'TextEdit', 'ADM0_A3': 'TextEdit', 'ADM0_LABEL': 'Range', 'ADMIN': 'TextEdit', 'GEONUNIT': 'TextEdit', 'GU_A3': 'TextEdit', 'MIN_LABEL': 'Range', 'MAX_LABEL': 'Range', 'MIN_ZOOM': 'TextEdit', 'WIKIDATAID': 'TextEdit', 'NE_ID': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'NAME_AR': 'TextEdit', 'NAME_BN': 'TextEdit', 'NAME_DE': 'TextEdit', 'NAME_EL': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_ES': 'TextEdit', 'NAME_FA': 'TextEdit', 'NAME_FR': 'TextEdit', 'NAME_HE': 'TextEdit', 'NAME_HI': 'TextEdit', 'NAME_HU': 'TextEdit', 'NAME_ID': 'TextEdit', 'NAME_IT': 'TextEdit', 'NAME_JA': 'TextEdit', 'NAME_KO': 'TextEdit', 'NAME_NL': 'TextEdit', 'NAME_PL': 'TextEdit', 'NAME_PT': 'TextEdit', 'NAME_RU': 'TextEdit', 'NAME_SV': 'TextEdit', 'NAME_TR': 'TextEdit', 'NAME_UK': 'TextEdit', 'NAME_UR': 'TextEdit', 'NAME_VI': 'TextEdit', 'NAME_ZH': 'TextEdit', 'NAME_ZHT': 'TextEdit', 'loyalty': 'TextEdit', });
lyr_tl_2022_us_primaryroads_3.set('fieldImages', {'LINEARID': 'TextEdit', 'FULLNAME': 'TextEdit', 'RTTYP': 'TextEdit', 'MTFCC': 'TextEdit', });
lyr_ne_10m_admin_1_states_provinces_4.set('fieldImages', {'featurecla': 'TextEdit', 'name': 'TextEdit', 'woe_label': 'TextEdit', 'woe_name': 'TextEdit', 'region_sub': 'TextEdit', 'min_label': 'TextEdit', 'max_label': 'TextEdit', 'min_zoom': 'TextEdit', 'name_en': 'TextEdit', 'name_ru': 'TextEdit', 'ne_id': 'TextEdit', });
lyr_tl_2022_us_mil_5.set('fieldImages', {'ANSICODE': 'TextEdit', 'AREAID': 'TextEdit', 'FULLNAME': 'TextEdit', 'MTFCC': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_ne_10m_airports_6.set('fieldImages', {'scalerank': '', 'featurecla': '', 'type': '', 'name': '', 'abbrev': '', 'location': '', 'gps_code': '', 'iata_code': '', 'wikipedia': '', 'natlscale': '', 'comments': '', 'wikidataid': '', 'name_ar': '', 'name_bn': '', 'name_de': '', 'name_en': '', 'name_es': '', 'name_fr': '', 'name_el': '', 'name_hi': '', 'name_hu': '', 'name_id': '', 'name_it': '', 'name_ja': '', 'name_ko': '', 'name_nl': '', 'name_pl': '', 'name_pt': '', 'name_ru': '', 'name_sv': '', 'name_tr': '', 'name_vi': '', 'name_zh': '', 'wdid_score': '', 'ne_id': '', 'name_fa': '', 'name_he': '', 'name_uk': '', 'name_ur': '', 'name_zht': '', });
lyr_Grid_7.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', });
lyr_ne_10m_admin_2_counties_2.set('fieldLabels', {'FEATURECLA': 'no label', 'SCALERANK': 'hidden field', 'ADM2_CODE': 'hidden field', 'ISO_3166_2': 'hidden field', 'ISO_A2': 'hidden field', 'ADM0_SR': 'hidden field', 'NAME': 'hidden field', 'NAME_ALT': 'no label', 'NAME_LOCAL': 'hidden field', 'TYPE': 'hidden field', 'TYPE_EN': 'hidden field', 'CODE_LOCAL': 'hidden field', 'REGION': 'no label', 'REGION_COD': 'hidden field', 'ABBREV': 'hidden field', 'AREA_SQKM': 'no label', 'SAMEASCITY': 'hidden field', 'LABELRANK': 'hidden field', 'NAME_LEN': 'hidden field', 'MAPCOLOR9': 'hidden field', 'MAPCOLOR13': 'hidden field', 'FIPS': 'hidden field', 'SOV_A3': 'hidden field', 'ADM0_A3': 'hidden field', 'ADM0_LABEL': 'hidden field', 'ADMIN': 'hidden field', 'GEONUNIT': 'hidden field', 'GU_A3': 'hidden field', 'MIN_LABEL': 'hidden field', 'MAX_LABEL': 'hidden field', 'MIN_ZOOM': 'hidden field', 'WIKIDATAID': 'hidden field', 'NE_ID': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'NAME_AR': 'hidden field', 'NAME_BN': 'hidden field', 'NAME_DE': 'hidden field', 'NAME_EL': 'hidden field', 'NAME_EN': 'no label', 'NAME_ES': 'hidden field', 'NAME_FA': 'hidden field', 'NAME_FR': 'hidden field', 'NAME_HE': 'hidden field', 'NAME_HI': 'hidden field', 'NAME_HU': 'hidden field', 'NAME_ID': 'hidden field', 'NAME_IT': 'hidden field', 'NAME_JA': 'hidden field', 'NAME_KO': 'hidden field', 'NAME_NL': 'hidden field', 'NAME_PL': 'hidden field', 'NAME_PT': 'hidden field', 'NAME_RU': 'hidden field', 'NAME_SV': 'hidden field', 'NAME_TR': 'hidden field', 'NAME_UK': 'hidden field', 'NAME_UR': 'hidden field', 'NAME_VI': 'hidden field', 'NAME_ZH': 'hidden field', 'NAME_ZHT': 'hidden field', 'loyalty': 'no label', });
lyr_tl_2022_us_primaryroads_3.set('fieldLabels', {'LINEARID': 'no label', 'FULLNAME': 'no label', 'RTTYP': 'no label', 'MTFCC': 'no label', });
lyr_ne_10m_admin_1_states_provinces_4.set('fieldLabels', {'featurecla': 'no label', 'name': 'no label', 'woe_label': 'no label', 'woe_name': 'no label', 'region_sub': 'no label', 'min_label': 'no label', 'max_label': 'no label', 'min_zoom': 'no label', 'name_en': 'no label', 'name_ru': 'no label', 'ne_id': 'no label', });
lyr_tl_2022_us_mil_5.set('fieldLabels', {'ANSICODE': 'no label', 'AREAID': 'no label', 'FULLNAME': 'no label', 'MTFCC': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_ne_10m_airports_6.set('fieldLabels', {'scalerank': 'no label', 'featurecla': 'no label', 'type': 'no label', 'name': 'inline label - always visible', 'abbrev': 'header label - visible with data', 'location': 'no label', 'gps_code': 'no label', 'iata_code': 'no label', 'wikipedia': 'no label', 'natlscale': 'no label', 'comments': 'no label', 'wikidataid': 'no label', 'name_ar': 'no label', 'name_bn': 'no label', 'name_de': 'no label', 'name_en': 'no label', 'name_es': 'no label', 'name_fr': 'no label', 'name_el': 'no label', 'name_hi': 'no label', 'name_hu': 'no label', 'name_id': 'no label', 'name_it': 'no label', 'name_ja': 'no label', 'name_ko': 'no label', 'name_nl': 'no label', 'name_pl': 'no label', 'name_pt': 'no label', 'name_ru': 'no label', 'name_sv': 'no label', 'name_tr': 'no label', 'name_vi': 'no label', 'name_zh': 'no label', 'wdid_score': 'no label', 'ne_id': 'no label', 'name_fa': 'no label', 'name_he': 'no label', 'name_uk': 'no label', 'name_ur': 'no label', 'name_zht': 'no label', });
lyr_Grid_7.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', });
lyr_Grid_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});