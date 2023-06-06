export function showEndScreen(engine, finalScore) {
    // Maak een nieuwe scene voor het eindscherm
    const endScene = new Scene(engine);
  
    // Creëer een label om de eindscore weer te geven
    const endScoreLabel = new Label({
      text: `Eindscore: ${finalScore}`,
      pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
      fontSize: 30,
      color: Color.White,
      textAlign: 'center',
    });
    endScoreLabel.anchor.setTo(0.5, 0.5);
  
    // Voeg het label toe aan de eindscene
    endScene.add(endScoreLabel);
  
    // Sluit de huidige scene af en ga over naar het eindscherm
    engine.goToScene(endScene);
  }
  