<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.4" tiledversion="1.4.1" name="tilesForest" tilewidth="16" tileheight="16" tilecount="77" columns="7">
 <editorsettings>
  <export target="tilesForest.tsx" format="tsx"/>
 </editorsettings>
 <image source="tilesForest.png" width="112" height="176"/>
 <terraintypes>
  <terrain name="Sky" tile="74"/>
  <terrain name="Cloud" tile="60"/>
 </terraintypes>
 <tile id="40">
  <properties>
   <property name="noCollision" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="41">
  <properties>
   <property name="noCollision" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="51" terrain="0,1,1,1"/>
 <tile id="52" terrain="1,0,1,1"/>
 <tile id="53" terrain="0,0,1,1"/>
 <tile id="58" terrain="1,1,0,1"/>
 <tile id="59" terrain="1,1,1,0"/>
 <tile id="60" terrain="1,1,1,1"/>
 <tile id="65" terrain="0,0,0,1"/>
 <tile id="66" terrain="0,0,1,0"/>
 <tile id="67" terrain="1,1,0,0"/>
 <tile id="72" terrain="0,1,0,0"/>
 <tile id="73" terrain="1,0,0,0"/>
 <tile id="74" terrain="0,0,0,0"/>
</tileset>
