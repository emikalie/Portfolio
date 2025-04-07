 #Local customization
 SAXON_JAR=/Users/emilykalie/Documents/TextAnalysis 210/Portfolio/xmlcalabash-3.0.0-alpha20/lib/Saxon-HE-12.5.jar
 COFFEEGRINDER_JAR=/Users/emilykalie/Documents/TextAnalysis 210/Portfolio/coffeepot-3.2.7/lib/CoffeeGrinder-3.2.7.jar
 COFFEEFILTER_JAR=/Users/emilykalie/Documents/TextAnalysis 210/Portfolio/coffeepot-3.2.7/lib/CoffeeFilter-3.2.7.jar
 BLITZ_JAR=/Users/emilykalie/Documents/TextAnalysis 210/markup-blitz/build/libs/markup-blitz.jar


 CLASSPATH=$BLITZ_JAR:$COFFEEGRINDER_JAR:$COFFEEFILTER_JAR:$SAXON_JAR:$MORGANA_LIB:$MORGANA_HOME/MorganaXProc-IIIse.jar

   java $JAVA_AGENT -cp $CLASSPATH com.xml_project.morganaxproc3.XProcEngine "$@"
