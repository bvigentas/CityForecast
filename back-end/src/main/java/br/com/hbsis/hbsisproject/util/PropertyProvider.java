package br.com.hbsis.hbsisproject.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Properties;

public class PropertyProvider {

    public static String getProperty(String propertyToFind) {
        Path path = Paths.get(System.getProperty("user.dir")).resolve("project-config.properties");
        try (FileInputStream fileInput = new FileInputStream(path.toString())) {
            Properties properties = new Properties();
            properties.load(fileInput);
            return  properties.getProperty(propertyToFind);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }
}
